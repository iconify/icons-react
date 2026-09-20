import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7ejzmb6d.css';
import '../../css/u/ul6axlxqn.css';
import '../../css/g/g74guoafd.css';
import '../../css/c/ct___5r2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7ejzmb6d"/><linearGradient id="SVG7ni4fWJD" x1="-422.16" x2="-416.994" y1="638.694" y2="638.694" gradientTransform="rotate(50.29 41745.15 68565.195)scale(89.07)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ul6axlxqn"/><stop offset="1" class="g74guoafd"/></linearGradient><path fill="url(#SVG7ni4fWJD)" class="ct___5r2c"/>`,
		"fallback": "selfhst:steam-deck",
	});
}

export default Component;
