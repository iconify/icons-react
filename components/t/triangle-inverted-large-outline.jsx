import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trnm7w1kk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="trnm7w1kk"/>`,
		"fallback": "healthicons:triangle-inverted-large-outline",
	});
}

export default Component;
