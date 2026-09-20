import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oboqkya6x.css';
import '../../css/j/j837hbcos.css';
import '../../css/u/us043obkx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="oboqkya6x"/><path class="j837hbcos"/><circle class="us043obkx"/></g>`,
		"fallback": "streamline:interface-lock-combination-combo-lock-locked-padlock-secure-security-shield-keyhole",
	});
}

export default Component;
