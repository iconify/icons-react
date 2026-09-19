import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy4n6yuzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qy4n6yuzt"/>`,
		"fallback": "healthicons:proper-roof2x-outline",
	});
}

export default Component;
