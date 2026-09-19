import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg69hcbqu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lg69hcbqu"/>`,
		"fallback": "healthicons:star-large2x-outline",
	});
}

export default Component;
