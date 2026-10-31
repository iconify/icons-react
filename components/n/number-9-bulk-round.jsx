import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op1oeqo0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op1oeqo0a"/>`,
		"fallback": "coolicons:number-9-bulk-round",
	});
}

export default Component;
