import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh3pkp80f.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh3pkp80f"/>`,
		"fallback": "wi:smog",
	});
}

export default Component;
