import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocvy942nz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocvy942nz"/>`,
		"fallback": "pinhead:pickup-truck-under-list-beside-checkmark",
	});
}

export default Component;
