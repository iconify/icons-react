import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hluj3t1dy.css';
import '../../css/x/xejxqhq6v.css';
import '../../css/w/wxtlldbyo.css';
import '../../css/m/mxxirtauc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hluj3t1dy"/><path class="xejxqhq6v"/><path class="wxtlldbyo"/><path class="mxxirtauc"/>`,
		"fallback": "energy-icons:pushpin-20",
	});
}

export default Component;
