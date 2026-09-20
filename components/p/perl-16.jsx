import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm0iucb3y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm0iucb3y"/>`,
		"fallback": "nonicons:perl-16",
	});
}

export default Component;
