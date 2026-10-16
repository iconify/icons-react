import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8r--tbbc.css';
import '../../css/n/ni0ydvbwi.css';
import '../../css/m/mswb4uy9b.css';
import '../../css/t/tm4h_tz1k.css';
import '../../css/v/v135c1b7p.css';
import '../../css/u/u8ws8ibhu.css';

const viewBox = {"width":750.11,"height":189.77};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8r--tbbc"/><path class="ni0ydvbwi"/><path class="mswb4uy9b"/><path class="tm4h_tz1k"/><path class="v135c1b7p"/><path class="u8ws8ibhu"/>`,
		"fallback": "thesvg-color:orangehrm",
	});
}

export default Component;
