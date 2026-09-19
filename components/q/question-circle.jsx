import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctndx5h7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ctndx5h7b"/>`,
		"fallback": "healthicons:question-circle",
	});
}

export default Component;
