import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldr9qjosp.css';
import '../../css/p/pdyp1acvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldr9qjosp"/><path clip-rule="evenodd" class="pdyp1acvy"/>`,
		"fallback": "solar:square-share-line-bold",
	});
}

export default Component;
