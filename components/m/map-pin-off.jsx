import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lkv9skxce.css';
import '../../css/e/e209lr_6a.css';
import '../../css/u/udqu4n_ci.css';
import '../../css/e/e39p62u0b.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="lkv9skxce"/><path class="e209lr_6a wm-shine"/><path class="udqu4n_ci wm-k"/><path class="e39p62u0b wm-a"/><path class="qr4ochb5c wm-s"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:map-pin-off",
	});
}

export default Component;
