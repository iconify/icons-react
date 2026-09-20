import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo8123eqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo8123eqc"/>`,
		"fallback": "mdi:lock-rate-open-variant-outline",
	});
}

export default Component;
