import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns5-s36pk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns5-s36pk"/>`,
		"fallback": "file-icons:karma",
	});
}

export default Component;
