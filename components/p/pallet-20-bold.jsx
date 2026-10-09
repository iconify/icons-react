import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d26h8nnid.css';
import '../../css/p/py89-ib0d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d26h8nnid"/><path class="py89-ib0d"/>`,
		"fallback": "energy-icons:pallet-20-bold",
	});
}

export default Component;
