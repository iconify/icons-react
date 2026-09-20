import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9y34yaiu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b9y34yaiu"/>`,
		"fallback": "streamline-plump:pencil-square-solid",
	});
}

export default Component;
