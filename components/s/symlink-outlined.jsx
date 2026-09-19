import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk4jgzb_e.css';
import '../../css/h/hdloyab2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk4jgzb_e"/><path class="hdloyab2s"/>`,
		"fallback": "eos-icons:symlink-outlined",
	});
}

export default Component;
