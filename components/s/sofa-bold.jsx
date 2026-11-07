import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6vyhu-he.css';
import '../../css/t/tm33md3wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6vyhu-he"/><path class="tm33md3wa"/>`,
		"fallback": "solar:sofa-bold",
	});
}

export default Component;
