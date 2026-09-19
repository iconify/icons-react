import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxq93d24c.css';
import '../../css/p/pf0hmharv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxq93d24c"/><path class="pf0hmharv"/>`,
		"fallback": "bxl:vuejs",
	});
}

export default Component;
