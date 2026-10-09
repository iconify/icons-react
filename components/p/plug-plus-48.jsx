import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j83z96bud.css';
import '../../css/s/sqs7l1bjm.css';
import '../../css/z/znfqzbt2u.css';
import '../../css/v/v-3r9t8cb.css';
import '../../css/c/cal94qbrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j83z96bud"/><path class="sqs7l1bjm"/><path class="znfqzbt2u"/><path class="v-3r9t8cb"/><path class="cal94qbrf"/>`,
		"fallback": "energy-icons:plug-plus-48",
	});
}

export default Component;
