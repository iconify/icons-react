import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qom_46mgf.css';
import '../../css/o/otubtw49h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qom_46mgf"/><path class="otubtw49h"/></g>`,
		"fallback": "iconoir:maps-turn-left",
	});
}

export default Component;
