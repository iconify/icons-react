import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoyto6b2i.css';
import '../../css/a/ayv-kqbrs.css';
import '../../css/n/n_65bgbxo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zoyto6b2i"/><path class="ayv-kqbrs"/><path class="n_65bgbxo"/></g>`,
		"fallback": "streamline-color:projector-board",
	});
}

export default Component;
