import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywmi_5b2y.css';
import '../../css/i/icvirebxe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ywmi_5b2y"/><path class="icvirebxe"/></g>`,
		"fallback": "fluent-emoji-flat:jeans",
	});
}

export default Component;
