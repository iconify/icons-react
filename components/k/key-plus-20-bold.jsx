import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl_ia6bco.css';
import '../../css/h/h3hh3dbwv.css';
import '../../css/i/i7t9jgzrw.css';
import '../../css/x/xwdhawfba.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl_ia6bco"/><path class="h3hh3dbwv"/><path class="i7t9jgzrw"/><path class="xwdhawfba"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:key-plus-20-bold",
	});
}

export default Component;
