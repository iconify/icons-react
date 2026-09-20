import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1ehicctz.css';
import '../../css/w/wakq1qbfu.css';
import '../../css/y/yuptbzgva.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o1ehicctz"/><path class="wakq1qbfu"/><path class="yuptbzgva"/></g>`,
		"fallback": "streamline-flex-color:label-folder-tag-flat",
	});
}

export default Component;
