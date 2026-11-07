import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud_9sccoj.css';
import '../../css/c/c5p-nqbdf.css';
import '../../css/w/wc2m4bc5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ud_9sccoj"/><path class="c5p-nqbdf"/><path class="wc2m4bc5y"/>`,
		"fallback": "solar:text-field-focus-outline",
	});
}

export default Component;
