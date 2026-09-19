import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tju-24idz.css';
import '../../css/l/lxi39ds5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tju-24idz"/><path class="lxi39ds5j"/>`,
		"fallback": "eos-icons:patterns-outlined",
	});
}

export default Component;
