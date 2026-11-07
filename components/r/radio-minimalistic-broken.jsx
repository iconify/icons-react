import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f89c2ypeq.css';
import '../../css/v/vbbzsbc0t.css';
import '../../css/z/zyzap34-z.css';
import '../../css/z/znnt10poq.css';
import '../../css/j/jox9tccbc.css';
import '../../css/n/n787bfb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f89c2ypeq"/><circle class="vbbzsbc0t"/><path class="zyzap34-z"/><path class="znnt10poq"/><path class="jox9tccbc"/><path class="n787bfb7v"/></g>`,
		"fallback": "solar:radio-minimalistic-broken",
	});
}

export default Component;
