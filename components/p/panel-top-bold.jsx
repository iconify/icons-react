import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pecu2cc1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pecu2cc1p"/>`,
		"fallback": "solar:panel-top-bold",
	});
}

export default Component;
