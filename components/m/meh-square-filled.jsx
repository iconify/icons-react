import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whdn7t8on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whdn7t8on"/>`,
		"fallback": "reicon:meh-square-filled",
	});
}

export default Component;
