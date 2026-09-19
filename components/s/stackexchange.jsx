import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugki3qq4t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugki3qq4t"/>`,
		"fallback": "cib:stackexchange",
	});
}

export default Component;
