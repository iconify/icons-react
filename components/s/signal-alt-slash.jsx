import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdxn-ef5l.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdxn-ef5l"/>`,
		"fallback": "fa-solid:signal-alt-slash",
	});
}

export default Component;
