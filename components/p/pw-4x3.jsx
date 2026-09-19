import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i__wmzbbt.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/s/st15vmbze.css';
import '../../css/a/a3bacpb2t.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGnsWPic8d"><path class="i__wmzbbt"/></clipPath></defs><g clip-path="url(#SVGnsWPic8d)" transform="translate(70.3)" class="nv9qcacyl"><path class="st15vmbze"/><path class="a3bacpb2t"/></g>`,
		"fallback": "flag:pw-4x3",
	});
}

export default Component;
