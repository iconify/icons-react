import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knrd91d8p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="knrd91d8p"/>`,
		"fallback": "streamline-flex:merge-pdf-solid",
	});
}

export default Component;
