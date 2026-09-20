import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t48jvub_e.css';
import '../../css/x/xcv6q1bnv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t48jvub_e"/><circle class="xcv6q1bnv"/></g>`,
		"fallback": "streamline:interface-validation-check-circle-checkmark-addition-circle-success-check-validation-add-form",
	});
}

export default Component;
