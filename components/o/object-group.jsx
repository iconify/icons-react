import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b48lj4b-h.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b48lj4b-h"/>`,
		"fallback": "fa:object-group",
	});
}

export default Component;
