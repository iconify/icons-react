import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/x/xl61igb9p.css';
import '../../css/j/j3gr4-b7l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="xl61igb9p"/><path class="j3gr4-b7l"/>`,
		"fallback": "ant-design:plus-square-twotone",
	});
}

export default Component;
