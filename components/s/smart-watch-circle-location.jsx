import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d2c9zweab.css';
import '../../css/s/s545q7bsh.css';
import '../../css/a/ab97rlr1v.css';
import '../../css/y/y_sj6qbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d2c9zweab"/><path class="s545q7bsh"/><path class="ab97rlr1v"/><path class="y_sj6qbgy"/></g>`,
		"fallback": "streamline-freehand-color:smart-watch-circle-location",
	});
}

export default Component;
