import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8f7hrbpl.css';
import '../../css/u/u9i0xe_nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8f7hrbpl"/><path clip-rule="evenodd" class="u9i0xe_nk"/>`,
		"fallback": "stash:pencil-single-light",
	});
}

export default Component;
