import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7ixe7qvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7ixe7qvc"/>`,
		"fallback": "mage:tag-minus-fill",
	});
}

export default Component;
