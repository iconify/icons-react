import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il9zs3bto.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="il9zs3bto"/>`,
		"fallback": "streamline-plump:shipment-upload-solid",
	});
}

export default Component;
