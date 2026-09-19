import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/miwahzg0r.css';
import '../../css/u/uijbiodsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="miwahzg0r"/><path class="uijbiodsb"/></g>`,
		"fallback": "iconoir:repeat-once",
	});
}

export default Component;
