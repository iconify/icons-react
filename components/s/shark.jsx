import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9s09lb8t.css';
import '../../css/y/yzxpiyiyo.css';
import '../../css/i/iqs1x0bnn.css';
import '../../css/a/ao2g_cctu.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/x/xxx7u60_z.css';
import '../../css/h/h323xnbql.css';
import '../../css/f/f53ce-bjt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9s09lb8t"/><path class="yzxpiyiyo"/><path class="iqs1x0bnn"/><path class="ao2g_cctu"/><g class="doj9dq_jg"><path class="xxx7u60_z"/><path class="h323xnbql"/><path class="f53ce-bjt"/></g>`,
		"fallback": "openmoji:shark",
	});
}

export default Component;
