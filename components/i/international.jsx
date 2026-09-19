import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sdw56mbgo.css';
import '../../css/h/h5gmtvkuk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="sdw56mbgo"/><path class="h5gmtvkuk"/></g>`,
		"fallback": "icon-park-outline:international",
	});
}

export default Component;
