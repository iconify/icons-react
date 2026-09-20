import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp-d1-b9o.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/d/d3gjt8lcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGsDOZcc6q" class="hp-d1-b9o"/></defs><g class="ft5dv1b6b"><use href="#SVGsDOZcc6q"/><g class="av3m8fbrw"><use href="#SVGsDOZcc6q"/><path class="d3gjt8lcd"/></g></g>`,
		"fallback": "tdesign:tag",
	});
}

export default Component;
