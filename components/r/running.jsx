import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcw1domtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcw1domtw"/>`,
		"fallback": "boxicons:running",
	});
}

export default Component;
