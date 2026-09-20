import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfv5b7b-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gfv5b7b-f"/>`,
		"fallback": "streamline-plump:traffic-light-remix",
	});
}

export default Component;
