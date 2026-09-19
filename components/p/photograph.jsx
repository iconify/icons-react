import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/g/gjb1_moez.css';
import '../../css/p/pjt-6tbav.css';
import '../../css/u/usic9obso.css';
import '../../css/p/pbk9vigpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="gjb1_moez"/><path class="pjt-6tbav"/><path class="usic9obso"/><path class="pbk9vigpq"/></g>`,
		"fallback": "icon-park:photograph",
	});
}

export default Component;
