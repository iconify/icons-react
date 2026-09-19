import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-50yz2xi.css';

const viewBox = {"width":478,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b-50yz2xi"/>`,
		"fallback": "file-icons:ngrx",
	});
}

export default Component;
