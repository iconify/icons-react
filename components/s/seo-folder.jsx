import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/ctq-00ygq.css';
import '../../css/o/o8x35cc1s.css';
import '../../css/j/jvsjkqbyk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ctq-00ygq"/><path class="o8x35cc1s"/><path class="jvsjkqbyk"/></g>`,
		"fallback": "icon-park-outline:seo-folder",
	});
}

export default Component;
