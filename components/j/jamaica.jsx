import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh2693boa.css';
import '../../css/v/vlyhmq5ak.css';
import '../../css/g/gkjkb4bue.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh2693boa"/><path class="vlyhmq5ak"/><path class="gkjkb4bue"/>`,
		"fallback": "tabler-flags:jamaica",
	});
}

export default Component;
