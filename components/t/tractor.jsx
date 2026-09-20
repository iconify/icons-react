import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xqmkvubyj.css';
import '../../css/u/u-qjejb8r.css';
import '../../css/k/kqj4zj76e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xqmkvubyj"/><path class="u-qjejb8r"/><path class="kqj4zj76e"/></g>`,
		"fallback": "tabler:tractor",
	});
}

export default Component;
