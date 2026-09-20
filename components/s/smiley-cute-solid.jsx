import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg1q65bki.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kg1q65bki"/>`,
		"fallback": "streamline:smiley-cute-solid",
	});
}

export default Component;
