import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymz4q6yty.css';
import '../../css/h/hlfwh4b4h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymz4q6yty"/><path class="hlfwh4b4h"/>`,
		"fallback": "openmoji:top-arrow",
	});
}

export default Component;
