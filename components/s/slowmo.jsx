import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag96a_b5n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag96a_b5n"/>`,
		"fallback": "f7:slowmo",
	});
}

export default Component;
