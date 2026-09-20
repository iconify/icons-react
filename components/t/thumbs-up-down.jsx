import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czmq92zwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czmq92zwg"/>`,
		"fallback": "mdi-light:thumbs-up-down",
	});
}

export default Component;
