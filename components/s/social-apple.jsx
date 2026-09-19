import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e6c-cgbkv.css';
import '../../css/p/pcjn26jew.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e6c-cgbkv"/><path class="pcjn26jew"/></g>`,
		"fallback": "foundation:social-apple",
	});
}

export default Component;
