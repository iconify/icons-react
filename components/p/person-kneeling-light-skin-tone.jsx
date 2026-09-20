import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq1bfqbrr.css';
import '../../css/h/h5qaki3px.css';
import '../../css/k/kxg230xtk.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/l/l3vc9zbcm.css';
import '../../css/c/c3e_cglle.css';
import '../../css/u/u4ox8lb0n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hq1bfqbrr"><circle class="h5qaki3px"/><path class="kxg230xtk"/></g><g class="brzn_0bpr"><circle class="l3vc9zbcm"/><path class="c3e_cglle"/><path class="u4ox8lb0n"/></g>`,
		"fallback": "openmoji:person-kneeling-light-skin-tone",
	});
}

export default Component;
