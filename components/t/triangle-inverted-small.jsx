import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su52d4bzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su52d4bzc"/>`,
		"fallback": "healthicons:triangle-inverted-small",
	});
}

export default Component;
