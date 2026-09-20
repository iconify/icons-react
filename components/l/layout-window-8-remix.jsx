import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z65ujlb3l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z65ujlb3l"/>`,
		"fallback": "streamline:layout-window-8-remix",
	});
}

export default Component;
