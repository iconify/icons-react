import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j83z96bud.css';
import '../../css/s/sqs7l1bjm.css';
import '../../css/z/znfqzbt2u.css';
import '../../css/p/py4nxfbnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j83z96bud"/><path class="sqs7l1bjm"/><path class="znfqzbt2u"/><path class="py4nxfbnh"/>`,
		"fallback": "energy-icons:plug-check-48",
	});
}

export default Component;
