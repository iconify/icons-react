import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdd_c94rd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pdd_c94rd"/>`,
		"fallback": "streamline-plump:search-visual-solid",
	});
}

export default Component;
