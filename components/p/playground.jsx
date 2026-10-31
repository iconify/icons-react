import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w1dp8qb9i.css';
import '../../css/s/skgel1llp.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="w1dp8qb9i"/><path class="skgel1llp"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:playground",
	});
}

export default Component;
