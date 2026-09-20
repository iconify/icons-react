import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot1g9j7yp.css';
import '../../css/f/fh44hvb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot1g9j7yp"/><path class="fh44hvb-w"/>`,
		"fallback": "pixel:retro-pc",
	});
}

export default Component;
