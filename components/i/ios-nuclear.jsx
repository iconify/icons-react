import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdqndac6f.css';
import '../../css/u/ulfd5d-am.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdqndac6f"/><circle class="ulfd5d-am"/>`,
		"fallback": "ion:ios-nuclear",
	});
}

export default Component;
