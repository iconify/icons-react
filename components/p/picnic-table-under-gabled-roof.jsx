import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8cjq9bkh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8cjq9bkh"/>`,
		"fallback": "pinhead:picnic-table-under-gabled-roof",
	});
}

export default Component;
