import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zjz1e9osm.css';
import '../../css/f/f8nt5l77j.css';
import '../../css/v/vprxwrlko.css';
import '../../css/x/xiy6v4b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zjz1e9osm"/><path class="f8nt5l77j wm-shadow"/><path class="vprxwrlko"/><path class="xiy6v4b3g"/></g>`,
		"fallback": "withicons-brutal:sparkles",
	});
}

export default Component;
