import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu0j3abrz.css';
import '../../css/p/p-sbw3baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu0j3abrz"/><path clip-rule="evenodd" class="p-sbw3baw"/>`,
		"fallback": "solar:meditation-round-bold",
	});
}

export default Component;
