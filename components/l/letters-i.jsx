import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sac_xsb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sac_xsb6m"/>`,
		"fallback": "tdesign:letters-i",
	});
}

export default Component;
