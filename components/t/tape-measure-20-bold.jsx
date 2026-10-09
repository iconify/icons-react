import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_x4m8o5k.css';
import '../../css/s/sb9z2f5dz.css';
import '../../css/w/wjkmecbyc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_x4m8o5k"/><path class="sb9z2f5dz"/><path class="wjkmecbyc"/>`,
		"fallback": "energy-icons:tape-measure-20-bold",
	});
}

export default Component;
