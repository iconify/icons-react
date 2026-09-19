import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf6w5_bfv.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf6w5_bfv"/>`,
		"fallback": "whh:osclass",
	});
}

export default Component;
