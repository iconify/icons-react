import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqs8f3gob.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqs8f3gob"/>`,
		"fallback": "icon-park-outline:usb-memory-stick",
	});
}

export default Component;
