import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw2h12bnf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw2h12bnf"/>`,
		"fallback": "whh:turnright",
	});
}

export default Component;
