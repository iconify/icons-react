import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a6z4ynb6v.css';
import '../../css/f/fqf74lb2o.css';
import '../../css/v/v39n78vsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="a6z4ynb6v"/><circle class="fqf74lb2o"/><path class="v39n78vsr"/></g>`,
		"fallback": "lets-icons:question",
	});
}

export default Component;
