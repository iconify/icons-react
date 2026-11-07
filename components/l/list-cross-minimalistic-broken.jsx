import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pre11cbbs.css';
import '../../css/f/f8edcu39k.css';
import '../../css/l/lydqd4-wj.css';
import '../../css/r/r9km2ybri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pre11cbbs"/><path class="f8edcu39k"/><path class="lydqd4-wj"/><path class="r9km2ybri"/></g>`,
		"fallback": "solar:list-cross-minimalistic-broken",
	});
}

export default Component;
