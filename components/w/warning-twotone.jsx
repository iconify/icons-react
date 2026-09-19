import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayfgg5nwl.css';
import '../../css/c/ccaa01b9p.css';
import '../../css/j/jej9crbqd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayfgg5nwl"/><path class="ccaa01b9p"/><path class="jej9crbqd"/>`,
		"fallback": "ant-design:warning-twotone",
	});
}

export default Component;
