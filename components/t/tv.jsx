import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgyzfcctb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgyzfcctb"/>`,
		"fallback": "bi:tv",
	});
}

export default Component;
