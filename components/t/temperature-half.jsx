import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtbki-bud.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtbki-bud"/>`,
		"fallback": "fa6-solid:temperature-half",
	});
}

export default Component;
