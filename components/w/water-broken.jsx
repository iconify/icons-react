import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mzxv1bbpg.css';
import '../../css/t/t135zx7nc.css';
import '../../css/v/vbcgq2ytz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mzxv1bbpg"/><path class="t135zx7nc"/><path class="vbcgq2ytz"/></g>`,
		"fallback": "solar:water-broken",
	});
}

export default Component;
