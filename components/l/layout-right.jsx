import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jw6zstywm.css';
import '../../css/v/v_s9ozb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jw6zstywm"/><path class="v_s9ozb0b"/></g>`,
		"fallback": "hugeicons:layout-right",
	});
}

export default Component;
