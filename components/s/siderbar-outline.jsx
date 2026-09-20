import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynaascbgh.css';
import '../../css/f/fephoqb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynaascbgh"/><path clip-rule="evenodd" class="fephoqb4b"/>`,
		"fallback": "solar:siderbar-outline",
	});
}

export default Component;
