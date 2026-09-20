import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/suuz8d7iq.css';
import '../../css/b/bauxs7clz.css';
import '../../css/o/oogehbcah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="suuz8d7iq"/><path class="bauxs7clz"/><path class="oogehbcah"/></g>`,
		"fallback": "lets-icons:pin-alt-duotone-line",
	});
}

export default Component;
