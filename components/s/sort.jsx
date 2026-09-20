import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zskg0iypq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zskg0iypq"/>`,
		"fallback": "ix:sort",
	});
}

export default Component;
