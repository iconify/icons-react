import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohah7tbjw.css';
import '../../css/f/fesuoib3l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ohah7tbjw"/><path class="fesuoib3l"/></g>`,
		"fallback": "streamline-plump-color:text-image-center-large-flat",
	});
}

export default Component;
