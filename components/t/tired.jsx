import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmu3bk6pi.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/l/lenv5cbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmu3bk6pi"/><path class="bwibdw4bb"/><path class="lenv5cbbq"/>`,
		"fallback": "boxicons:tired",
	});
}

export default Component;
