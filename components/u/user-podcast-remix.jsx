import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz3q-gb5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nz3q-gb5p"/>`,
		"fallback": "streamline-plump:user-podcast-remix",
	});
}

export default Component;
