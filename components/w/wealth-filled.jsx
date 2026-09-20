import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s02m9kbje.css';
import '../../css/p/pcxgyzb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s02m9kbje"/><path class="pcxgyzb-d"/>`,
		"fallback": "tdesign:wealth-filled",
	});
}

export default Component;
