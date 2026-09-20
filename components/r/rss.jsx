import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exm41o2bn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exm41o2bn"/>`,
		"fallback": "oi:rss",
	});
}

export default Component;
