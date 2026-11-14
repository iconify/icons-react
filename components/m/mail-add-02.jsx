import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vck01wbiq.css';
import '../../css/o/o-pj3zbcl.css';
import '../../css/n/n_sheacqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vck01wbiq"/><path class="o-pj3zbcl"/><path class="n_sheacqd"/></g>`,
		"fallback": "hugeicons:mail-add-02",
	});
}

export default Component;
