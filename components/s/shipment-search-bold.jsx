import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aimebubco.css';
import '../../css/o/ova0c4bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aimebubco"/><path class="ova0c4bsx"/>`,
		"fallback": "streamline-ultimate:shipment-search-bold",
	});
}

export default Component;
