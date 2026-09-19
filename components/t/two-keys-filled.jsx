import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lzsaqpynz.css';
import '../../css/z/zf78x5ais.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lzsaqpynz"/><path class="zf78x5ais"/></g>`,
		"fallback": "bitcoin-icons:two-keys-filled",
	});
}

export default Component;
