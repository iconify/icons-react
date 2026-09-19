import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf2nuuhyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kf2nuuhyr"/>`,
		"fallback": "healthicons:sayana-press-outline",
	});
}

export default Component;
