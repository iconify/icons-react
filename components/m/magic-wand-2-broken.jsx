import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lz4nwht4y.css';
import '../../css/r/rimuh7bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lz4nwht4y"/><path class="rimuh7bpm"/></g>`,
		"fallback": "solar:magic-wand-2-broken",
	});
}

export default Component;
