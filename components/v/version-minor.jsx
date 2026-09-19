import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg_xf-bjm.css';
import '../../css/s/stheyzbwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg_xf-bjm"/><path class="stheyzbwt"/>`,
		"fallback": "carbon:version-minor",
	});
}

export default Component;
