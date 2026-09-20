import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frms94-ux.css';
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
		"content": `<g class="frms94-ux"><path class="haeexlbuc"/><path class="ubiksac-u"/><path class="eyimmqbyl"/></g>`,
		"fallback": "material-icon-theme:redux-reducer",
	});
}

export default Component;
