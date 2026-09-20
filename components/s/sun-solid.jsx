import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilmv3rwlp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ilmv3rwlp"/>`,
		"fallback": "streamline-flex:sun-solid",
	});
}

export default Component;
