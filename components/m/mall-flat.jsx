import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zi18o2b1l.css';
import '../../css/o/o05ed0b5r.css';
import '../../css/f/fpmixebgx.css';
import '../../css/d/d0jaynbfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zi18o2b1l"/><path class="o05ed0b5r"/><path class="fpmixebgx"/><path clip-rule="evenodd" class="d0jaynbfk"/></g>`,
		"fallback": "streamline-plump-color:mall-flat",
	});
}

export default Component;
