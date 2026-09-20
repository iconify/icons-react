import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if7f6bbhw.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if7f6bbhw"/>`,
		"fallback": "memory:menu-bottom-left",
	});
}

export default Component;
