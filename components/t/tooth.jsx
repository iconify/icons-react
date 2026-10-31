import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umdxetbnf.css';
import '../../css/t/tr3ui2ews.css';
import '../../css/z/zl6jhp60c.css';
import '../../css/o/op_wf1bij.css';
import '../../css/e/eruygvblf.css';
import '../../css/n/n83cn8b7c.css';
import '../../css/v/vhnloqdve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="umdxetbnf wm-k"/><path class="tr3ui2ews wm-deco"/><path class="wm-k zl6jhp60c"/><path class="op_wf1bij wm-k"/><path class="eruygvblf wm-shadow"/><path class="n83cn8b7c wm-shine"/><path class="vhnloqdve wm-shine"/></g>`,
		"fallback": "withicons-valentine:tooth",
	});
}

export default Component;
