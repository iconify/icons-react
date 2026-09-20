import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dad1_xhcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dad1_xhcg"/>`,
		"fallback": "streamline-sharp:shopping-bag-hand-bag-price-tag-solid",
	});
}

export default Component;
