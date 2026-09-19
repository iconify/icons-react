import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dx8zvvbyq.css';
import '../../css/z/zw4ci9ado.css';
import '../../css/z/zuks9xh3k.css';
import '../../css/e/eqmanlbjq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dx8zvvbyq"/><path class="zw4ci9ado"/><path class="zuks9xh3k"/><path class="eqmanlbjq"/></g>`,
		"fallback": "fluent-emoji-flat:umbrella-with-rain-drops",
	});
}

export default Component;
