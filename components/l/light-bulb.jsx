import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k3zebeaxi.css';
import '../../css/u/unkt3clqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k3zebeaxi"/><path class="unkt3clqm"/></g>`,
		"fallback": "mage:light-bulb",
	});
}

export default Component;
