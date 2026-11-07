import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isvst5k4t.css';
import '../../css/m/mm5l9hb-p.css';
import '../../css/o/ovgsf7b1z.css';
import '../../css/j/j1tvjbbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isvst5k4t"/><path clip-rule="evenodd" class="mm5l9hb-p"/><path clip-rule="evenodd" class="ovgsf7b1z"/><path class="j1tvjbbgs"/>`,
		"fallback": "solar:user-speak-outline",
	});
}

export default Component;
