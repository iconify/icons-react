import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q570a2b8h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q570a2b8h"/>`,
		"fallback": "streamline-plump:spotify-logo-remix",
	});
}

export default Component;
