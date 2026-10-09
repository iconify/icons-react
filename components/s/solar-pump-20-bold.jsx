import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9597wbne.css';
import '../../css/p/pul26ybon.css';
import '../../css/w/wumlmueqb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9597wbne"/><path class="pul26ybon"/><path class="wumlmueqb"/>`,
		"fallback": "energy-icons:solar-pump-20-bold",
	});
}

export default Component;
