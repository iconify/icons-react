import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iox6mb34c.css';
import '../../css/l/l824lplye.css';
import '../../css/o/osfo8-b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iox6mb34c"/><path class="l824lplye"/><path class="osfo8-b1f"/></g>`,
		"fallback": "hugeicons:sun-cloud-mid-rain-01",
	});
}

export default Component;
