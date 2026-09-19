import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4gp8bbtg.css';
import '../../css/i/iwyv0ebdx.css';
import '../../css/r/rmfj2xbwu.css';
import '../../css/u/u-ih4kbbd.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4gp8bbtg"/><path class="iwyv0ebdx"/><path class="rmfj2xbwu"/><g transform="translate(320 256.9)scale(176.87999)"><path id="SVGQN7gneJU" class="u-ih4kbbd"/><use width="100%" height="100%" href="#SVGQN7gneJU" transform="rotate(-144)"/><use width="100%" height="100%" href="#SVGQN7gneJU" transform="rotate(-72)"/><use width="100%" height="100%" href="#SVGQN7gneJU" transform="rotate(72)"/><use width="100%" height="100%" href="#SVGQN7gneJU" transform="rotate(144)"/></g>`,
		"fallback": "flag:mm-4x3",
	});
}

export default Component;
