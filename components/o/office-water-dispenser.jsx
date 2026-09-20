import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elrh2557x.css';
import '../../css/x/xetimxb4d.css';
import '../../css/m/m-xwi9bgo.css';
import '../../css/k/khw2j8bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elrh2557x"/><path class="xetimxb4d"/><path class="m-xwi9bgo"/><path class="khw2j8bkf"/>`,
		"fallback": "streamline-freehand:office-water-dispenser",
	});
}

export default Component;
