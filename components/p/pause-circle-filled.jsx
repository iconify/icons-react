import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z42twibwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z42twibwy"/>`,
		"fallback": "reicon:pause-circle-filled",
	});
}

export default Component;
