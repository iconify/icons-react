import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zueoy9zdn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zueoy9zdn"/>`,
		"fallback": "whh:scissorsalt",
	});
}

export default Component;
