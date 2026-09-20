import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4f9tbg5g.css';
import '../../css/v/v8p-pjnia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4f9tbg5g"/><path class="v8p-pjnia"/>`,
		"fallback": "streamline-ultimate:shipment-bold",
	});
}

export default Component;
