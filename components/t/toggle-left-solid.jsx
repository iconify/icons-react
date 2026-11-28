import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pssw4_ktq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pssw4_ktq"/>`,
		"fallback": "iconaut:toggle-left-solid",
	});
}

export default Component;
