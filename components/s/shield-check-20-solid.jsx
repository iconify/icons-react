import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixh097b2o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ixh097b2o"/>`,
		"fallback": "heroicons:shield-check-20-solid",
	});
}

export default Component;
