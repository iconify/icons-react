import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nc1ozk_pl.css';
import '../../css/g/glgyo9tzv.css';
import '../../css/m/mbub22b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nc1ozk_pl"/><path class="glgyo9tzv"/><path class="mbub22b_g"/></g>`,
		"fallback": "streamline-freehand-color:security-shield-settings",
	});
}

export default Component;
