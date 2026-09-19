import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3lmd4bmk.css';
import '../../css/f/fvmh2ibcr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3lmd4bmk"/><path class="fvmh2ibcr"/>`,
		"fallback": "carbon:rule-draft",
	});
}

export default Component;
