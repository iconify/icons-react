import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qix4teb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qix4teb5l"/>`,
		"fallback": "lsicon:surface-top-filled",
	});
}

export default Component;
