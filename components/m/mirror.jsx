import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjf6_87ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pjf6_87ka"/>`,
		"fallback": "reicon:mirror",
	});
}

export default Component;
