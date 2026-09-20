import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4bkfewdq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c4bkfewdq"/>`,
		"fallback": "streamline-flex:shopping-basket-add-remix",
	});
}

export default Component;
