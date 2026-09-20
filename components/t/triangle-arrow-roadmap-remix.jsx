import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6om9tvdr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h6om9tvdr"/>`,
		"fallback": "streamline-plump:triangle-arrow-roadmap-remix",
	});
}

export default Component;
