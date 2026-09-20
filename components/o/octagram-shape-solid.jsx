import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp332gbek.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp332gbek"/>`,
		"fallback": "streamline-plump:octagram-shape-solid",
	});
}

export default Component;
