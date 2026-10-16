import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo717acqe.css';
import '../../css/l/lcl31_e5n.css';
import '../../css/d/dnr4xbcll.css';
import '../../css/b/bwer3vbep.css';
import '../../css/f/fqif2v-9n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo717acqe"/><path class="lcl31_e5n"/><path class="dnr4xbcll"/><path class="bwer3vbep"/><path class="fqif2v-9n"/>`,
		"fallback": "energy-icons:water-pump-48",
	});
}

export default Component;
