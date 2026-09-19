import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnp73_ylh.css';
import '../../css/w/w033lebyr.css';
import '../../css/m/mprl4mbnb.css';
import '../../css/n/nbn0cnlzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnp73_ylh"/><circle class="w033lebyr"/><circle class="mprl4mbnb"/><circle class="nbn0cnlzv"/></g>`,
		"fallback": "icon-park-outline:more-two",
	});
}

export default Component;
