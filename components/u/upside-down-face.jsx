import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/o/otit0l4ks.css';
import '../../css/u/uwsmjnb9k.css';
import '../../css/a/alabn_bfc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><circle class="otit0l4ks"/><path class="uwsmjnb9k"/><path class="alabn_bfc"/>`,
		"fallback": "openmoji:upside-down-face",
	});
}

export default Component;
