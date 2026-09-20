import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndtnp7byj.css';
import '../../css/f/f8czh3bth.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ndtnp7byj"/><path clip-rule="evenodd" class="f8czh3bth"/></g>`,
		"fallback": "streamline-plump-color:wallet-flat",
	});
}

export default Component;
