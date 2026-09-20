import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwl_c-0if.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mwl_c-0if"/>`,
		"fallback": "streamline-plump:pool-ladder-remix",
	});
}

export default Component;
