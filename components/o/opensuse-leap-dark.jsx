import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsjp5hb6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsjp5hb6q"/>`,
		"fallback": "selfhst:opensuse-leap-dark",
	});
}

export default Component;
