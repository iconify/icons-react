import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ydkd9k2vo.css';
import '../../css/t/te_sywpie.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ydkd9k2vo"/><path class="te_sywpie"/></g>`,
		"fallback": "streamline:interface-user-remove-actions-remove-close-geometric-human-person-minus-single-up-user",
	});
}

export default Component;
