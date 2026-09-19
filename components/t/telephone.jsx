import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kls-7u3hg.css';
import '../../css/z/zbvr83pqm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kls-7u3hg"/><circle class="zbvr83pqm"/></g>`,
		"fallback": "bytesize:telephone",
	});
}

export default Component;
