import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut988i6ey.css';
import '../../css/b/bvhpy4bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut988i6ey"/><path class="bvhpy4bga"/>`,
		"fallback": "tdesign:logo-ie",
	});
}

export default Component;
