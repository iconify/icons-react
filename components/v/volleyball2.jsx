import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdyx2sb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kdyx2sb9p"/>`,
		"fallback": "reicon:volleyball2",
	});
}

export default Component;
