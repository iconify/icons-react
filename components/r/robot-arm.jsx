import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/enyh8rb_h.css';
import '../../css/j/j81_8cdpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="enyh8rb_h"/><circle class="j81_8cdpe"/></g>`,
		"fallback": "lucide:robot-arm",
	});
}

export default Component;
