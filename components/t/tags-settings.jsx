import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2eefp2bq.css';
import '../../css/l/lcg1blgbk.css';
import '../../css/n/nqzoejbzx.css';
import '../../css/l/lq1_bi8pr.css';
import '../../css/u/ucbia8bsu.css';
import '../../css/y/y593fqirs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w2eefp2bq"/><path class="lcg1blgbk"/><path class="nqzoejbzx"/><path class="lq1_bi8pr"/><path class="ucbia8bsu"/><path class="y593fqirs"/></g>`,
		"fallback": "streamline-ultimate-color:tags-settings",
	});
}

export default Component;
