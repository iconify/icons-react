import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiqh8os_h.css';
import '../../css/t/tgl2ebb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiqh8os_h"/><path class="tgl2ebb0g"/>`,
		"fallback": "stash:sliders-v-duotone",
	});
}

export default Component;
