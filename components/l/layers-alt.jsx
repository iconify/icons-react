import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajrde3qwb.css';
import '../../css/i/idfa2cc6d.css';
import '../../css/n/n-beafqqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajrde3qwb"/><path class="idfa2cc6d"/><path class="n-beafqqj"/>`,
		"fallback": "uim:layers-alt",
	});
}

export default Component;
