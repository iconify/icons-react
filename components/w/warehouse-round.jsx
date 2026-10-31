import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4j7ji3es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4j7ji3es"/>`,
		"fallback": "coolicons:warehouse-round",
	});
}

export default Component;
