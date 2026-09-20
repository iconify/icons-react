import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xq22orswi.css';
import '../../css/t/t0_glhyss.css';
import '../../css/y/ym_p6zbdr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xq22orswi"/><path class="t0_glhyss"/><circle class="ym_p6zbdr"/></g>`,
		"fallback": "streamline:interface-file-setting-file-common-setting",
	});
}

export default Component;
