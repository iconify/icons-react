import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea6a2ebin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea6a2ebin"/>`,
		"fallback": "simple-icons:tinyletter",
	});
}

export default Component;
