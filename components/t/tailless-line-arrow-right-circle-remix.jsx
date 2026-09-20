import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whm6_wb8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whm6_wb8b"/>`,
		"fallback": "streamline-plump:tailless-line-arrow-right-circle-remix",
	});
}

export default Component;
