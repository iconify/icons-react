import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/k/ko79dj56t.css';
import '../../css/m/mko8dh4hu.css';
import '../../css/s/s36q3pbgs.css';
import '../../css/v/vvmfiub1b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(-90 7 7)" class="yph-txb3i"/><path class="ko79dj56t"/><circle class="mko8dh4hu"/><path class="s36q3pbgs"/><circle class="vvmfiub1b"/></g>`,
		"fallback": "streamline:interface-setting-slider-vertical-adjustment-adjust-controls-fader-vertical-settings-slider-square",
	});
}

export default Component;
