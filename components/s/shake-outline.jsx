import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl1h56gff.css';
import '../../css/z/zoh-vz08z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl1h56gff"/><path class="zoh-vz08z"/>`,
		"fallback": "eva:shake-outline",
	});
}

export default Component;
