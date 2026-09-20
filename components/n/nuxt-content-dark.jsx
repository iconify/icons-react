import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3b0diw2j.css';
import '../../css/p/pbqykbbtr.css';
import '../../css/t/te70mh0qt.css';
import '../../css/p/plgj7kbye.css';
import '../../css/v/vo5tj0bbe.css';

const viewBox = {"width":257,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3b0diw2j"/><path class="pbqykbbtr"/><path clip-rule="evenodd" class="te70mh0qt"/><path class="plgj7kbye"/><path clip-rule="evenodd" class="vo5tj0bbe"/></g>`,
		"fallback": "thesvg-color:nuxt-content-dark",
	});
}

export default Component;
