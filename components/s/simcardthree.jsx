import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nesni0gix.css';

const viewBox = {"width":895,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nesni0gix"/>`,
		"fallback": "whh:simcardthree",
	});
}

export default Component;
