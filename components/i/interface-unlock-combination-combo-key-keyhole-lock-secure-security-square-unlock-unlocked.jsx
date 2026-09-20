import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oboqkya6x.css';
import '../../css/t/t7myqtbem.css';
import '../../css/u/us043obkx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="oboqkya6x"/><path class="t7myqtbem"/><circle class="us043obkx"/></g>`,
		"fallback": "streamline:interface-unlock-combination-combo-key-keyhole-lock-secure-security-square-unlock-unlocked",
	});
}

export default Component;
