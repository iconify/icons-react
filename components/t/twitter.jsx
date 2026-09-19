import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nboed-byc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nboed-byc"/>`,
		"fallback": "icon-park-outline:twitter",
	});
}

export default Component;
