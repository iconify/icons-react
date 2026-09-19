import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9rz2pk3b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9rz2pk3b"/>`,
		"fallback": "icon-park-outline:triangle-round-rectangle",
	});
}

export default Component;
