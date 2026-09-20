import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/i13-gsb6n.css';
import '../../css/y/yfmnqcbbm.css';
import '../../css/n/n81tx26mw.css';
import '../../css/c/c0czcirtf.css';
import '../../css/e/e7yjhubnw.css';
import '../../css/o/omu_zuybb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 -.014)" class="brzn_0bpr"><rect class="i13-gsb6n"/><path clip-rule="evenodd" class="yfmnqcbbm"/></g><g transform="translate(0 -.014)" class="n81tx26mw"><rect class="c0czcirtf"/><path clip-rule="evenodd" class="e7yjhubnw"/><rect class="omu_zuybb"/></g>`,
		"fallback": "openmoji:p-button",
	});
}

export default Component;
