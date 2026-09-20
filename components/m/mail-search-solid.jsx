import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay24x4blt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ay24x4blt"/>`,
		"fallback": "streamline-plump:mail-search-solid",
	});
}

export default Component;
