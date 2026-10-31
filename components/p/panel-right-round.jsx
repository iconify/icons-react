import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acivrw2rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acivrw2rx"/>`,
		"fallback": "coolicons:panel-right-round",
	});
}

export default Component;
