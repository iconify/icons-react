import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/ojp4_cecj.css';
import '../../css/f/ft0_rxebo.css';
import '../../css/a/asva5pbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path clip-rule="evenodd" class="ojp4_cecj"/><path class="ft0_rxebo"/></g><path class="asva5pbrw"/></g>`,
		"fallback": "reicon:plug-circle-duotone",
	});
}

export default Component;
