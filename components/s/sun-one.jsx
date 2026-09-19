import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cny4agblb.css';
import '../../css/a/ad1pplybg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cny4agblb"/><path class="ad1pplybg"/>`,
		"fallback": "icon-park-solid:sun-one",
	});
}

export default Component;
