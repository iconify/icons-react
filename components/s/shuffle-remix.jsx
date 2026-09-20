import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zckaopb4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zckaopb4k"/>`,
		"fallback": "streamline-plump:shuffle-remix",
	});
}

export default Component;
