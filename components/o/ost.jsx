import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9vad2brh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkcukxw1e.css';
import '../../css/m/md286fbip.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGBKaMBekK" class="c9vad2brh"/></defs><g class="ft5dv1b6b"><circle class="wkcukxw1e"/><g class="md286fbip"><use href="#SVGBKaMBekK"/><use href="#SVGBKaMBekK"/></g></g>`,
		"fallback": "cryptocurrency-color:ost",
	});
}

export default Component;
