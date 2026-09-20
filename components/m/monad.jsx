import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt7il2bsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt7il2bsc"/>`,
		"fallback": "token:monad",
	});
}

export default Component;
