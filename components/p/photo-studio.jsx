import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/ko4kphb8z.css';
import '../../css/z/z2i083byh.css';
import '../../css/a/a6wkvlbgd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ko4kphb8z"/><path class="z2i083byh"/><path class="a6wkvlbgd"/></g>`,
		"fallback": "pepicons-pencil:photo-studio",
	});
}

export default Component;
