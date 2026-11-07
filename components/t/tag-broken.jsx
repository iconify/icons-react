import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t3tivrbho.css';
import '../../css/d/dv86dk8ai.css';
import '../../css/y/yv3vxtb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t3tivrbho"/><path class="dv86dk8ai"/><path class="yv3vxtb5i"/></g>`,
		"fallback": "solar:tag-broken",
	});
}

export default Component;
