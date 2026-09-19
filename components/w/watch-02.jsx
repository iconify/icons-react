import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uhqiogb9b.css';
import '../../css/z/zr7knrf6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uhqiogb9b"/><path class="zr7knrf6z"/></g>`,
		"fallback": "hugeicons:watch-02",
	});
}

export default Component;
