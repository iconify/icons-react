import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-rswabiu.css';

const viewBox = {"width":392,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-rswabiu"/>`,
		"fallback": "ps:justice",
	});
}

export default Component;
