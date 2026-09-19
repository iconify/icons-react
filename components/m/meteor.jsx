import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5kcx5b-h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5kcx5b-h"/>`,
		"fallback": "cib:meteor",
	});
}

export default Component;
