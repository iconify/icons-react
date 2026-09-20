import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c3b4mlqos.css';
import '../../css/g/gyv3og-gm.css';
import '../../css/e/e1ou-eb-u.css';
import '../../css/q/qru0v3g-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c3b4mlqos"/><path class="gyv3og-gm"/><path class="e1ou-eb-u"/><path class="qru0v3g-c"/></g>`,
		"fallback": "reicon:wallet3",
	});
}

export default Component;
