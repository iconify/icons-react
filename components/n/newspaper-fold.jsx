import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lyfpph83j.css';
import '../../css/i/ibyph9b4f.css';
import '../../css/s/s2oty211w.css';
import '../../css/o/oeds6acur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lyfpph83j"/><path class="ibyph9b4f"/><path class="s2oty211w"/><path class="oeds6acur"/></g>`,
		"fallback": "streamline-freehand-color:newspaper-fold",
	});
}

export default Component;
