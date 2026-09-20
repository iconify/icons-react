import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpc7ahhih.css';
import '../../css/i/i8z3n6v9x.css';
import '../../css/y/yf4mwmb-p.css';
import '../../css/g/g2aqx6i7m.css';

const viewBox = {"width":256,"height":255};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kpc7ahhih"><path class="i8z3n6v9x"/><path class="yf4mwmb-p"/><path class="g2aqx6i7m"/></g>`,
		"fallback": "thesvg-color:jasmine",
	});
}

export default Component;
