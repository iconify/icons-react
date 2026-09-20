import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cinn4vbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cinn4vbgj"/>`,
		"fallback": "streamline-sharp:roller-solid",
	});
}

export default Component;
