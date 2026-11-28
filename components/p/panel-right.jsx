import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0dw7vbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0dw7vbzs"/>`,
		"fallback": "noviair:panel-right",
	});
}

export default Component;
