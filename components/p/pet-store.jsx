import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljv9kz7ks.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljv9kz7ks"/>`,
		"fallback": "temaki:pet-store",
	});
}

export default Component;
