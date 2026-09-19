import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upzee6b-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upzee6b-r"/>`,
		"fallback": "icon-park:share-two",
	});
}

export default Component;
