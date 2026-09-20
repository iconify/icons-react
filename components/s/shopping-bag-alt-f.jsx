import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj1nqubkc.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj1nqubkc"/>`,
		"fallback": "jam:shopping-bag-alt-f",
	});
}

export default Component;
