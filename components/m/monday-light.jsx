import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogo13fy2m.css';
import '../../css/x/x32nqibwz.css';
import '../../css/n/nn2rpubji.css';
import '../../css/p/pp9e_nbfw.css';
import '../../css/b/bczueohzd.css';

const viewBox = {"width":467,"height":85};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1.292)scale(3.69565)"><path class="ogo13fy2m"/><path class="x32nqibwz"/><circle class="nn2rpubji"/></g><path class="pp9e_nbfw"/><path clip-rule="evenodd" class="bczueohzd"/>`,
		"fallback": "thesvg-color:monday-light",
	});
}

export default Component;
