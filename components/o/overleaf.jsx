import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3yci9bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3yci9bua"/>`,
		"fallback": "thesvg:overleaf",
	});
}

export default Component;
