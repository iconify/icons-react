import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/j/jzp97ibqw.css';
import '../../css/n/n_1rlib_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><circle class="kb9zbkb1z"/><path class="jzp97ibqw"/><path class="n_1rlib_h"/></g>`,
		"fallback": "icon-park:round-distortion",
	});
}

export default Component;
