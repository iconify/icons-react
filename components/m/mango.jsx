import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvv2-_gri.css';
import '../../css/t/tkdfdgcfn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zvv2-_gri"/><path class="tkdfdgcfn"/></g>`,
		"fallback": "fluent-emoji-flat:mango",
	});
}

export default Component;
