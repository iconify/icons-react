import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o61jznlym.css';
import '../../css/f/fkx2mnb9s.css';
import '../../css/f/ff9zbvbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o61jznlym"/><path class="fkx2mnb9s"/><path class="ff9zbvbzx"/></g>`,
		"fallback": "keyline-icons:user-sparkles-sharp-duotone",
	});
}

export default Component;
