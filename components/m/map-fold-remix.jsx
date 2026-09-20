import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itw0z-bdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="itw0z-bdt"/>`,
		"fallback": "streamline-plump:map-fold-remix",
	});
}

export default Component;
