import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr5hvsl7q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr5hvsl7q"/>`,
		"fallback": "selfhst:ollama-dark",
	});
}

export default Component;
