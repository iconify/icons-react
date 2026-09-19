import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skdtm7eru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skdtm7eru"/>`,
		"fallback": "healthicons:paved-road-alt2x-outline",
	});
}

export default Component;
