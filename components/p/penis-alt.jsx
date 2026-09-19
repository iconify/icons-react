import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be7cf6b4i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="be7cf6b4i"/>`,
		"fallback": "healthicons:penis-alt",
	});
}

export default Component;
