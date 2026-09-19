import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoo1flbos.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoo1flbos"/>`,
		"fallback": "game-icons:lock-picking",
	});
}

export default Component;
