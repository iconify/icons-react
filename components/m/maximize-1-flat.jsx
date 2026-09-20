import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpyt2kkgn.css';
import '../../css/t/th2mi4bqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dpyt2kkgn"/><path class="th2mi4bqw"/></g>`,
		"fallback": "streamline-plump-color:maximize-1-flat",
	});
}

export default Component;
