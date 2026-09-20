import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8obj5_al.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r8obj5_al"/>`,
		"fallback": "streamline-flex-color:polygonal-lasso-tool-flat",
	});
}

export default Component;
