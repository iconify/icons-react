import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly7vjva2u.css';
import '../../css/s/siiy5zxln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly7vjva2u"/><path class="siiy5zxln"/>`,
		"fallback": "energy-icons:turtle-20",
	});
}

export default Component;
