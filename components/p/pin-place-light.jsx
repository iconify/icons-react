import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sc81ekglr.css';
import '../../css/g/gzqdavf5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sc81ekglr"/><path class="gzqdavf5n"/></g>`,
		"fallback": "stash:pin-place-light",
	});
}

export default Component;
