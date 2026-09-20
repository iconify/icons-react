import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlrjk96mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlrjk96mi"/>`,
		"fallback": "tabler:layout-align-top",
	});
}

export default Component;
