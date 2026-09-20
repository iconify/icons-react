import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im5fqoxyd.css';

const viewBox = {"width":553.4,"height":78.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im5fqoxyd"/>`,
		"fallback": "thesvg-color:marqeta-light",
	});
}

export default Component;
