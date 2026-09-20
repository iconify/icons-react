import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z821b9bih.css';
import '../../css/h/haeexlbuc.css';
import '../../css/u/ubiksac-u.css';
import '../../css/e/eyimmqbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z821b9bih"><path class="haeexlbuc"/><path class="ubiksac-u"/><path class="eyimmqbyl"/></g>`,
		"fallback": "material-icon-theme:redux-selector",
	});
}

export default Component;
