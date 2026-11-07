import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctu7he3ei.css';
import '../../css/m/mrqs5-_hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ctu7he3ei"/><path class="mrqs5-_hf"/>`,
		"fallback": "solar:rewind-forward-bold-duotone",
	});
}

export default Component;
