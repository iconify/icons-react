import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uzikshbpy.css';
import '../../css/o/odt--5g8d.css';
import '../../css/e/eyr02rbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uzikshbpy"/><path class="odt--5g8d"/><path class="eyr02rbfs"/></g>`,
		"fallback": "streamline-ultimate:taking-pictures-cameras",
	});
}

export default Component;
