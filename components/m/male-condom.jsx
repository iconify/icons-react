import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcqu-00yr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dcqu-00yr"/>`,
		"fallback": "healthicons:male-condom",
	});
}

export default Component;
