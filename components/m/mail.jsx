import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/i/i_ng745sa.css';
import '../../css/u/uisqotb2c.css';
import '../../css/i/i78exuy0q.css';

const viewBox = {"width":41,"height":41,"top":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="i_ng745sa"/><path class="uisqotb2c"/><path class="i78exuy0q"/></g>`,
		"fallback": "streamline-stickies-color:mail",
	});
}

export default Component;
