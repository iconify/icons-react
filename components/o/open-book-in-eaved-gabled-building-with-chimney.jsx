import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp46v6-0o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp46v6-0o"/>`,
		"fallback": "pinhead:open-book-in-eaved-gabled-building-with-chimney",
	});
}

export default Component;
