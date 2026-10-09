import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrs6n7bep.css';
import '../../css/w/w2gzq9yrr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrs6n7bep"/><path class="w2gzq9yrr"/>`,
		"fallback": "energy-icons:wattmeter-20",
	});
}

export default Component;
