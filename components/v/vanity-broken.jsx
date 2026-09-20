import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/genc22bnp.css';
import '../../css/k/kbu1ckbfc.css';
import '../../css/d/dgxz1pbwj.css';
import '../../css/p/pq-nuf5df.css';
import '../../css/a/a61wxkb_y.css';
import '../../css/e/eukpbibyf.css';
import '../../css/m/ml9ynwb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="genc22bnp"/><path class="kbu1ckbfc"/><path class="dgxz1pbwj"/><path class="pq-nuf5df"/><path class="a61wxkb_y"/><path class="eukpbibyf"/><path class="ml9ynwb_c"/></g>`,
		"fallback": "solar:vanity-broken",
	});
}

export default Component;
