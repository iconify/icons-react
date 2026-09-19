import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddz2_obsr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddz2_obsr"/>`,
		"fallback": "fluent-mdl2:step-shared-insert",
	});
}

export default Component;
