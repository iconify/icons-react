import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qfxv4acsa.css';
import '../../css/j/jvh5j30lk.css';
import '../../css/a/axcyuob0q.css';
import '../../css/n/njmcqt95x.css';
import '../../css/h/hmkiadh9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qfxv4acsa wm-shadow"/><path class="jvh5j30lk wm-shadow"/><path class="axcyuob0q"/><path class="njmcqt95x"/><path class="hmkiadh9h"/></g>`,
		"fallback": "withicons-brutal:paintbrush",
	});
}

export default Component;
