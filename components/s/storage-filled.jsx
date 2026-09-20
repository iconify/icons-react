import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6ngtbcis.css';
import '../../css/k/k5o2fzblv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6ngtbcis"/><path clip-rule="evenodd" class="k5o2fzblv"/>`,
		"fallback": "ix:storage-filled",
	});
}

export default Component;
