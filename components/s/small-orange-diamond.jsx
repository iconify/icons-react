import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m76gx5b6o.css';
import '../../css/l/ll5nhre1j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m76gx5b6o"/><path class="ll5nhre1j"/>`,
		"fallback": "openmoji:small-orange-diamond",
	});
}

export default Component;
