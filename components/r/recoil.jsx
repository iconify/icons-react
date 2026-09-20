import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beynuj9wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beynuj9wr"/>`,
		"fallback": "thesvg:recoil",
	});
}

export default Component;
