import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egkgmdb6b.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egkgmdb6b"/>`,
		"fallback": "wi:moon-alt-waning-crescent-5",
	});
}

export default Component;
