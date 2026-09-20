import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juvi3mbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juvi3mbzv"/>`,
		"fallback": "keyline-icons:key-round-sharp",
	});
}

export default Component;
