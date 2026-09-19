import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gbytq-btb.css';
import '../../css/j/j-gbv-iht.css';
import '../../css/j/jncf--hba.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="gbytq-btb"/><path class="j-gbv-iht"/><path class="jncf--hba"/></g>`,
		"fallback": "icon-park:macadamia-nut",
	});
}

export default Component;
