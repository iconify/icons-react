import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjs8q412m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjs8q412m"/>`,
		"fallback": "temaki:storage-drum",
	});
}

export default Component;
