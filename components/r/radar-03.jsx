import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mm4eu-bgy.css';
import '../../css/a/akzoi-bci.css';
import '../../css/e/eoh8kjxii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mm4eu-bgy"/><path class="akzoi-bci"/><path class="eoh8kjxii"/></g>`,
		"fallback": "hugeicons:radar-03",
	});
}

export default Component;
