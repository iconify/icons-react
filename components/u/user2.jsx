import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stwsl5b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="stwsl5b-h"/>`,
		"fallback": "reicon:user2",
	});
}

export default Component;
