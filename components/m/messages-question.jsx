import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7mn3bcuw.css';
import '../../css/x/x-2o_ni0u.css';
import '../../css/s/se4zpyb9x.css';
import '../../css/g/g2shq8b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s7mn3bcuw"/><path class="x-2o_ni0u"/><path class="se4zpyb9x"/><path class="g2shq8b2q"/></g>`,
		"fallback": "andrsrxn:messages-question",
	});
}

export default Component;
