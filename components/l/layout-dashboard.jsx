import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l-qhmh_oo.css';
import '../../css/m/mqrlxqbob.css';
import '../../css/b/beuf2wq9k.css';
import '../../css/v/vic3mgb2x.css';
import '../../css/b/brhlkrfva.css';
import '../../css/l/l_mab4b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="l-qhmh_oo wm-shadow"/><path class="mqrlxqbob wm-shadow"/><path class="beuf2wq9k"/><path class="vic3mgb2x"/><path class="brhlkrfva"/><path class="l_mab4b7y"/></g>`,
		"fallback": "withicons-brutal:layout-dashboard",
	});
}

export default Component;
