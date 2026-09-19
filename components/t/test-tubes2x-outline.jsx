import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whemcl2nf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whemcl2nf"/>`,
		"fallback": "healthicons:test-tubes2x-outline",
	});
}

export default Component;
