import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkgtonb0o.css';

const viewBox = {"width":192,"height":192};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkgtonb0o"/>`,
		"fallback": "thesvg-color:sanity-dark",
	});
}

export default Component;
