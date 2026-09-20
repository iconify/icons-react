import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na_s0_b3p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="na_s0_b3p"/>`,
		"fallback": "streamline-plump:stool-remix",
	});
}

export default Component;
