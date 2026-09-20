import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi5j1db3c.css';
import '../../css/p/pgxnyljae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi5j1db3c"/><path class="pgxnyljae"/>`,
		"fallback": "thesvg-color:vllm",
	});
}

export default Component;
