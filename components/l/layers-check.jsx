import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cria1o_sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cria1o_sj"/>`,
		"fallback": "noviair:layers-check",
	});
}

export default Component;
