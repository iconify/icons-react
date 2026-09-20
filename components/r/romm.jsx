import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaz8g2msr.css';
import '../../css/y/yrdtwjb0t.css';
import '../../css/y/yi-g9l8ek.css';
import '../../css/y/ymhcny24d.css';
import '../../css/s/spa50jnxs.css';
import '../../css/x/xvc8zkb9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jaz8g2msr"/><path class="yrdtwjb0t"/><path class="yi-g9l8ek"/><path class="ymhcny24d"/><path class="spa50jnxs"/><path class="xvc8zkb9k"/>`,
		"fallback": "selfhst:romm",
	});
}

export default Component;
