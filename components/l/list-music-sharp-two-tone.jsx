import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v8bkmxbml.css';
import '../../css/j/jiipjmbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v8bkmxbml"/><path class="jiipjmbmb"/></g>`,
		"fallback": "keyline-icons:list-music-sharp-two-tone",
	});
}

export default Component;
