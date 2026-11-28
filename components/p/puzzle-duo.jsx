import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m60pqtldl.css';
import '../../css/s/sui4_vb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m60pqtldl secondary"/><path class="primary sui4_vb3a"/>`,
		"fallback": "iconaut:puzzle-duo",
	});
}

export default Component;
