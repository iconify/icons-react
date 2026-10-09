import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwv2wmb8a.css';
import '../../css/w/wx6yz0xkc.css';
import '../../css/p/pygpe6bmd.css';
import '../../css/u/ut938kb3x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwv2wmb8a"/><path class="wx6yz0xkc"/><path class="pygpe6bmd"/><path class="ut938kb3x"/>`,
		"fallback": "energy-icons:sliders-20",
	});
}

export default Component;
