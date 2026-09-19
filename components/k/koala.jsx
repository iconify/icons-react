import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjf1kibie.css';
import '../../css/d/da33y2b2u.css';
import '../../css/w/wcer0ud5w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wjf1kibie"/><path class="da33y2b2u"/><path class="wcer0ud5w"/></g>`,
		"fallback": "fluent-emoji-flat:koala",
	});
}

export default Component;
