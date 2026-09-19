import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc84q5bnu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc84q5bnu"/>`,
		"fallback": "flat-color-icons:next",
	});
}

export default Component;
