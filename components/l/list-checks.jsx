import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2h4v_bfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2h4v_bfx"/>`,
		"fallback": "doodle-icons:list-checks",
	});
}

export default Component;
