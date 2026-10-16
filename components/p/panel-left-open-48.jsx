import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty5a_vbpt.css';
import '../../css/i/iiw5x-k7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty5a_vbpt"/><path class="iiw5x-k7v"/>`,
		"fallback": "energy-icons:panel-left-open-48",
	});
}

export default Component;
