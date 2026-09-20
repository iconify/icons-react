import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7n416b3p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z7n416b3p"/>`,
		"fallback": "streamline-plump:paint-palette-remix",
	});
}

export default Component;
