import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfhcms4tg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfhcms4tg"/>`,
		"fallback": "pinhead:shopping-bag-with-arrows-recirculating",
	});
}

export default Component;
