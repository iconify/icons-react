import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpkfulj6u.css';
import '../../css/r/rinax6lee.css';
import '../../css/c/cnadooubh.css';
import '../../css/g/gfm-7czce.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpkfulj6u"/><path class="rinax6lee"/><path class="cnadooubh"/><path class="gfm-7czce"/>`,
		"fallback": "energy-icons:languages-48-bold",
	});
}

export default Component;
