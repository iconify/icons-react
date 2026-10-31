import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mozbmubwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mozbmubwh"/>`,
		"fallback": "coolicons:panel-top-round",
	});
}

export default Component;
