import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gwa14955r.css';
import '../../css/a/a0gtrrbuj.css';
import '../../css/l/l55ao_bqb.css';
import '../../css/u/u731zeots.css';
import '../../css/k/kv9osebmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gwa14955r"/><path class="a0gtrrbuj"/><path class="l55ao_bqb"/><path class="u731zeots"/><path class="kv9osebmj"/></g>`,
		"fallback": "solar:lightning-broken",
	});
}

export default Component;
