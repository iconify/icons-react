import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udpblib2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udpblib2j"/>`,
		"fallback": "token:pundix",
	});
}

export default Component;
