import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xcv6q1bnv.css';
import '../../css/e/e03jjq99j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xcv6q1bnv"/><path class="e03jjq99j"/></g>`,
		"fallback": "streamline:interface-remove-circle-delete-add-circle-subtract-button-buttons-remove",
	});
}

export default Component;
