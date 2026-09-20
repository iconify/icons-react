import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwico__yj.css';
import '../../css/h/htu6zoakn.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGREWbgcXm" class="jwico__yj"/></defs><circle class="htu6zoakn"/><use href="#SVGREWbgcXm"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><use href="#SVGREWbgcXm"/></g>`,
		"fallback": "openmoji:regional-indicator-j",
	});
}

export default Component;
