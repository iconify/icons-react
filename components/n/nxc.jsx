import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5hwqbklo.css';

const viewBox = {"width":343,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5hwqbklo"/>`,
		"fallback": "file-icons:nxc",
	});
}

export default Component;
