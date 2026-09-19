import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2977i58y.css';
import '../../css/r/rx0zx5bsb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2977i58y"/><path class="rx0zx5bsb"/>`,
		"fallback": "ep:lock",
	});
}

export default Component;
