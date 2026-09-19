import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1-owzbag.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1-owzbag"/>`,
		"fallback": "fa:linux",
	});
}

export default Component;
