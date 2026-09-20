import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op_ar-b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op_ar-b0o"/>`,
		"fallback": "tabler:table-export",
	});
}

export default Component;
