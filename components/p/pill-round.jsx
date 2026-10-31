import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiprb2byv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiprb2byv"/>`,
		"fallback": "coolicons:pill-round",
	});
}

export default Component;
