import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/krek1qb5c.css';
import '../../css/k/kkqpawebx.css';
import '../../css/t/t2zt86a2w.css';
import '../../css/f/fb89hc7os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="krek1qb5c"/><path class="kkqpawebx"/><path class="t2zt86a2w"/><path class="fb89hc7os"/></g>`,
		"fallback": "streamline-freehand-color:office-desk-1",
	});
}

export default Component;
