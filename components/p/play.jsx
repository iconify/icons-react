import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo6xumbec.css';

const viewBox = {"width":1408,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo6xumbec"/>`,
		"fallback": "fa:play",
	});
}

export default Component;
