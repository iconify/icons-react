import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trrtt2yqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trrtt2yqv"/>`,
		"fallback": "streamline-plump:radioactive-1",
	});
}

export default Component;
