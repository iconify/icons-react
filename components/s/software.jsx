import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-7zdubzz.css';
import '../../css/j/jjj7yd_xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-7zdubzz"/><path class="jjj7yd_xu"/>`,
		"fallback": "eos-icons:software",
	});
}

export default Component;
