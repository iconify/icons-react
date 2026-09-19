import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jed83ob_g.css';
import '../../css/d/dy2c4igvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jed83ob_g"/><path class="dy2c4igvu"/></g>`,
		"fallback": "iconoir:rss-feed-squared",
	});
}

export default Component;
