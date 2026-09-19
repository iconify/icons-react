import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qxlgbccih.css';
import '../../css/k/k_pdj69rf.css';
import '../../css/u/ui2s02ojw.css';
import '../../css/h/hadzi1b-h.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qxlgbccih"/><path class="k_pdj69rf"/><path class="ui2s02ojw"/><path class="hadzi1b-h"/></g>`,
		"fallback": "flagpack:st",
	});
}

export default Component;
