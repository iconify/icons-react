import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b1h85pbcc.css';
import '../../css/b/b5k1ulb5x.css';
import '../../css/q/q_vv9aczd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b1h85pbcc"/><path class="b5k1ulb5x"/><path class="q_vv9aczd"/></g>`,
		"fallback": "hugeicons:lectern",
	});
}

export default Component;
