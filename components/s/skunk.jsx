import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygchy2b8s.css';
import '../../css/i/ijs9jncao.css';
import '../../css/o/oit_e981h.css';
import '../../css/n/nutx-ybmj.css';
import '../../css/i/i4qkdm4an.css';
import '../../css/r/rhh0lhbtv.css';
import '../../css/e/efz5mwo0d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygchy2b8s"/><path class="ijs9jncao"/><path class="oit_e981h"/><g class="nutx-ybmj"><path class="i4qkdm4an"/><path class="rhh0lhbtv"/><path class="efz5mwo0d"/></g>`,
		"fallback": "openmoji:skunk",
	});
}

export default Component;
