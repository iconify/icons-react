import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r88kw5nfj.css';
import '../../css/k/ktivz12lx.css';
import '../../css/i/i_36s7bas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r88kw5nfj"/><path class="ktivz12lx"/><path clip-rule="evenodd" class="i_36s7bas"/></g>`,
		"fallback": "streamline-plump-color:smoking-area-flat",
	});
}

export default Component;
