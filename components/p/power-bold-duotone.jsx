import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjmcju-mi.css';
import '../../css/p/pvhv_7sne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjmcju-mi"/><path class="pvhv_7sne"/>`,
		"fallback": "solar:power-bold-duotone",
	});
}

export default Component;
