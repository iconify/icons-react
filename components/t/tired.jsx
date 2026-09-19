import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmu3bk6pi.css';
import '../../css/w/wqbkv8u2i.css';
import '../../css/k/k31e-btyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmu3bk6pi"/><path class="wqbkv8u2i"/><path class="k31e-btyh"/>`,
		"fallback": "bx:tired",
	});
}

export default Component;
