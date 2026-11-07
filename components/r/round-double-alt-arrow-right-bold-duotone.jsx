import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrdvcwidb.css';
import '../../css/u/uhl-u5b-k.css';
import '../../css/j/jutrygoyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrdvcwidb"/><path class="uhl-u5b-k"/><path class="jutrygoyf"/>`,
		"fallback": "solar:round-double-alt-arrow-right-bold-duotone",
	});
}

export default Component;
