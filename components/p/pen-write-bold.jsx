import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwtecabub.css';
import '../../css/m/mlafkbsqu.css';
import '../../css/z/z1k-5fi1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwtecabub"/><path class="mlafkbsqu"/><path class="z1k-5fi1t"/>`,
		"fallback": "streamline-ultimate:pen-write-bold",
	});
}

export default Component;
