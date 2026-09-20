import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/m/mgi9p2hvu.css';
import '../../css/a/ap0jw-bid.css';
import '../../css/a/a4is-4piq.css';
import '../../css/t/tmjxwmg5h.css';
import '../../css/p/pnw7a002c.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="mgi9p2hvu"/><path class="ap0jw-bid"/><path class="a4is-4piq"/><path class="tmjxwmg5h"/><path class="pnw7a002c"/></g>`,
		"fallback": "streamline-stickies-color:sun-clound-weather",
	});
}

export default Component;
