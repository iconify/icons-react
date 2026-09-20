import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odzm6z18x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="odzm6z18x"/>`,
		"fallback": "streamline-plump:shipment-upload-remix",
	});
}

export default Component;
