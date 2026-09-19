import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igqmfsbkx.css';

const viewBox = {"width":2656,"height":2080};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igqmfsbkx"/>`,
		"fallback": "vs:male-female",
	});
}

export default Component;
