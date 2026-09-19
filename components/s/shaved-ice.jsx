import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4mc9zblt.css';
import '../../css/m/msskd8qws.css';
import '../../css/b/bnif0nb5f.css';
import '../../css/l/l-jqb5b_t.css';
import '../../css/j/jho_vutkm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4mc9zblt"/><path class="msskd8qws"/><path class="bnif0nb5f"/><path class="l-jqb5b_t"/><path class="jho_vutkm"/></g>`,
		"fallback": "fluent-emoji-flat:shaved-ice",
	});
}

export default Component;
