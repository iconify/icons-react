import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/b/bnjyhac1n.css';
import '../../css/n/nbslokeii.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="bnjyhac1n"/><path class="nbslokeii"/></g>`,
		"fallback": "icon-park:text-underline",
	});
}

export default Component;
