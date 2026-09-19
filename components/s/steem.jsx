import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovnmu6bfn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovnmu6bfn"/>`,
		"fallback": "cryptocurrency:steem",
	});
}

export default Component;
