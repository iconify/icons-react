import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbqu5pbrr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gbqu5pbrr"/>`,
		"fallback": "streamline-plump:mouse-wireless-1-remix",
	});
}

export default Component;
