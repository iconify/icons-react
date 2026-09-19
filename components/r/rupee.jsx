import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rogyzp3fi.css';

const viewBox = {"width":928,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rogyzp3fi"/>`,
		"fallback": "fa:rupee",
	});
}

export default Component;
