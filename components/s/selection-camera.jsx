import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqh3a4b8v.css';
import '../../css/b/bqum7nbhr.css';
import '../../css/z/za5_m_box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yqh3a4b8v"/><path class="bqum7nbhr"/><circle class="za5_m_box"/></g>`,
		"fallback": "andrsrxn:selection-camera",
	});
}

export default Component;
