import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkljsib1f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tkljsib1f"/>`,
		"fallback": "streamline-plump:signal-full-solid",
	});
}

export default Component;
