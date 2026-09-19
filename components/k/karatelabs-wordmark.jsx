import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swdppqbue.css';
import '../../css/e/e_lvdb_ov.css';
import '../../css/j/j7iar1btc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swdppqbue"/><path class="e_lvdb_ov"/><path class="j7iar1btc"/>`,
		"fallback": "devicon:karatelabs-wordmark",
	});
}

export default Component;
