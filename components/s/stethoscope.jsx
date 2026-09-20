import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbm918b9c.css';
import '../../css/n/n7kkcye_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbm918b9c"/><path class="n7kkcye_p"/>`,
		"fallback": "uim:stethoscope",
	});
}

export default Component;
