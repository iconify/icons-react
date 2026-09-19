import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm29z5bmd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm29z5bmd"/>`,
		"fallback": "codicon:layout-sidebar-right",
	});
}

export default Component;
