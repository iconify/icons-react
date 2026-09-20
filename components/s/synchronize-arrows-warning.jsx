import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rzgm95thu.css';
import '../../css/z/z_ypc62sw.css';
import '../../css/m/m78giqign.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rzgm95thu"/><path class="z_ypc62sw"/><path class="m78giqign"/></g>`,
		"fallback": "streamline-freehand-color:synchronize-arrows-warning",
	});
}

export default Component;
