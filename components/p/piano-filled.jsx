import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reuni_bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reuni_bio"/>`,
		"fallback": "boxicons:piano-filled",
	});
}

export default Component;
