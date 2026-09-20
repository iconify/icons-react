import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n77ln9e3r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n77ln9e3r"/>`,
		"fallback": "streamline-plump:telescope-remix",
	});
}

export default Component;
