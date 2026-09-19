import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mtniocboc.css';
import '../../css/b/b7zej8znp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mtniocboc"/><path class="b7zej8znp"/></g>`,
		"fallback": "bitcoin-icons:search-filled",
	});
}

export default Component;
