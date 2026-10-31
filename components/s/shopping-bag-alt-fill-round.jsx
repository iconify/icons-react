import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcu2-ibcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcu2-ibcg"/>`,
		"fallback": "coolicons:shopping-bag-alt-fill-round",
	});
}

export default Component;
