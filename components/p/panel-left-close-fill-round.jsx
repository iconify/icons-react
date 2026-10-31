import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw_p5en_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw_p5en_g"/>`,
		"fallback": "coolicons:panel-left-close-fill-round",
	});
}

export default Component;
