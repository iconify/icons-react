import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx2bsr38n.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx2bsr38n"/>`,
		"fallback": "ls:playmedia",
	});
}

export default Component;
