import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwqla4h4a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwqla4h4a"/>`,
		"fallback": "whh:layerorderdown",
	});
}

export default Component;
