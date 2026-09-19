import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk9fdi05w.css';
import '../../css/e/exaqnd3xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk9fdi05w"/><path class="exaqnd3xk"/>`,
		"fallback": "bx:shuffle",
	});
}

export default Component;
