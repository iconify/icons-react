import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fruy2eb-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fruy2eb-r"/>`,
		"fallback": "icon-park:move-one",
	});
}

export default Component;
