import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ma7f2b-py.css';
import '../../css/b/b9mw2hbpj.css';
import '../../css/u/ur9_n9ihi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ma7f2b-py"/><path clip-rule="evenodd" class="b9mw2hbpj"/><path class="ur9_n9ihi"/></g>`,
		"fallback": "streamline-plump-color:virtual-reality-flat",
	});
}

export default Component;
