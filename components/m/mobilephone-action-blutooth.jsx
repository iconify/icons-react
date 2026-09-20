import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k4_zijh7b.css';
import '../../css/s/s1ixhbchk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k4_zijh7b"/><path class="s1ixhbchk"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-blutooth",
	});
}

export default Component;
