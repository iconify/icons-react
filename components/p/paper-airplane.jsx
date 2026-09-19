import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nayh5bbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nayh5bbdf"/>`,
		"fallback": "heroicons-outline:paper-airplane",
	});
}

export default Component;
