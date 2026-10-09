import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb1scqbmo.css';
import '../../css/a/aqncqbc6o.css';
import '../../css/i/iomwkbcdi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb1scqbmo"/><path class="aqncqbc6o"/><path class="iomwkbcdi"/>`,
		"fallback": "energy-icons:transformer-20",
	});
}

export default Component;
