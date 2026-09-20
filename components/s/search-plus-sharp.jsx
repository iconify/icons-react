import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbi2j8bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbi2j8bjs"/>`,
		"fallback": "keyline-icons:search-plus-sharp",
	});
}

export default Component;
