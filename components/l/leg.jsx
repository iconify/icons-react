import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iox9jwa4b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iox9jwa4b"/>`,
		"fallback": "healthicons:leg",
	});
}

export default Component;
