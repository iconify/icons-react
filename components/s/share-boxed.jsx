import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn6csrh5o.css';
import '../../css/c/cpg14cc3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn6csrh5o"/><path class="cpg14cc3z"/>`,
		"fallback": "cil:share-boxed",
	});
}

export default Component;
