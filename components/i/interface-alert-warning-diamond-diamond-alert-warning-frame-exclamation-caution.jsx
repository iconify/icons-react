import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/adqa7173x.css';
import '../../css/u/us043obkx.css';
import '../../css/i/inuemh_cj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="adqa7173x"/><circle class="us043obkx"/><rect transform="rotate(-45 7 7)" class="inuemh_cj"/></g>`,
		"fallback": "streamline:interface-alert-warning-diamond-diamond-alert-warning-frame-exclamation-caution",
	});
}

export default Component;
