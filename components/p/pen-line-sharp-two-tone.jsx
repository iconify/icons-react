import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jlvs6-k6s.css';
import '../../css/o/osux7fcgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jlvs6-k6s"/><path class="osux7fcgy"/></g>`,
		"fallback": "keyline-icons:pen-line-sharp-two-tone",
	});
}

export default Component;
