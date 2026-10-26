import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umyjuccpi.css';

const viewBox = {"width":240,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umyjuccpi"/>`,
		"fallback": "thesvg-color:n8n-dark",
	});
}

export default Component;
