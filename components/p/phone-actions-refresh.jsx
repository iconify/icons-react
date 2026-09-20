import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8pru53ky.css';
import '../../css/e/e9-hq-b0a.css';
import '../../css/w/w886hybwe.css';
import '../../css/b/bbxar80qj.css';
import '../../css/p/pwr26eqha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8pru53ky"/><path class="e9-hq-b0a"/><path class="w886hybwe"/><path class="bbxar80qj"/><path class="pwr26eqha"/></g>`,
		"fallback": "streamline-ultimate-color:phone-actions-refresh",
	});
}

export default Component;
