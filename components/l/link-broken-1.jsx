import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts5yxozgn.css';
import '../../css/h/hk7v3ko0m.css';
import '../../css/f/frayrbmqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ts5yxozgn"/><path class="hk7v3ko0m"/><path class="frayrbmqa"/></g>`,
		"fallback": "streamline-ultimate-color:link-broken-1",
	});
}

export default Component;
