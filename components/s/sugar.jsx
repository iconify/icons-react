import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwxo7xy6t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwxo7xy6t"/>`,
		"fallback": "ep:sugar",
	});
}

export default Component;
