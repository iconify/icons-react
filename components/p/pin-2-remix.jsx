import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzve78bil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bzve78bil"/>`,
		"fallback": "streamline-plump:pin-2-remix",
	});
}

export default Component;
