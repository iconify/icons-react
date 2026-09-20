import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ano4-lbdm {
  stop-color: var(--svg-color--58b0e3, #58B0E3);
}

.m3oqydo4x {
  stop-color: var(--svg-color--f44e28, #F44E28);
}

.r_7q6bbxo {
  fill: var(--svg-color--fff, #FFF);
  cx: 128px;
  cy: 128px;
  r: 128px;
}

.xr7opcupm {
  d: path("M186.831 49.21h-7.774l-50.825 73.452h-.464L77.059 49.21h-7.89l54.77 79.022L69.4 206.79h7.774l50.477-73.22h.464l50.476 73.22h7.891l-54.538-78.558l54.886-79.022z");
}
</style><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ssvg-id-macosxa"><stop offset="0%" class="ano4-lbdm"/><stop offset="100%" class="m3oqydo4x"/></linearGradient></defs><circle class="r_7q6bbxo"/><path fill="url(#ssvg-id-macosxa)" class="xr7opcupm"/>`,
		"fallback": "logos:macosx",
	});
}

export default Component;
