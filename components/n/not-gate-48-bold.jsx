import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i04mbuhvn.css';
import '../../css/h/hf4ii3vwy.css';
import '../../css/j/j00bos-ah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i04mbuhvn"/><path class="hf4ii3vwy"/><path class="j00bos-ah"/>`,
		"fallback": "energy-icons:not-gate-48-bold",
	});
}

export default Component;
