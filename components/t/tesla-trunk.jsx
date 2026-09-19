import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfy829k1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfy829k1d"/>`,
		"fallback": "cbi:tesla-trunk",
	});
}

export default Component;
