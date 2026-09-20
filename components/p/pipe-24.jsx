import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2yj9i4te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2yj9i4te"/>`,
		"fallback": "qlementine-icons:pipe-24",
	});
}

export default Component;
