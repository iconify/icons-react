import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/av-ze3uhq.css';
import '../../css/g/gdjy5jlqy.css';
import '../../css/m/mjs6u-cpe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="av-ze3uhq"/><circle class="gdjy5jlqy"/><path class="mjs6u-cpe"/></g>`,
		"fallback": "streamline:interface-user-check-actions-close-checkmark-check-geometric-human-person-single-success-up-user",
	});
}

export default Component;
