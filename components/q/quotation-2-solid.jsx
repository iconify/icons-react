import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9a7r7b8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x9a7r7b8a"/>`,
		"fallback": "streamline-plump:quotation-2-solid",
	});
}

export default Component;
