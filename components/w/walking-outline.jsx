import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajqu-9x9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ajqu-9x9w"/>`,
		"fallback": "solar:walking-outline",
	});
}

export default Component;
