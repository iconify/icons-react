import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q75qm4lmu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q75qm4lmu"/>`,
		"fallback": "streamline-flex:play-list-4-solid",
	});
}

export default Component;
