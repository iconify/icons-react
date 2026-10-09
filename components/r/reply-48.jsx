import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hubnyacig.css';
import '../../css/n/nsgvqc0vm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hubnyacig"/><path class="nsgvqc0vm"/>`,
		"fallback": "energy-icons:reply-48",
	});
}

export default Component;
