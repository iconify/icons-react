import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez_cv9rsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ez_cv9rsg"/>`,
		"fallback": "streamline-plump:test-tube-remix",
	});
}

export default Component;
