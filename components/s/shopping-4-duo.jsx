import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cew6qzb9g.css';
import '../../css/q/qvzbfubik.css';
import '../../css/q/qoeoglgwq.css';
import '../../css/i/i4ua2th9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cew6qzb9g"/><path class="qvzbfubik"/><path class="qoeoglgwq"/><path class="i4ua2th9b"/></g>`,
		"fallback": "streamline-kameleon-color:shopping-4-duo",
	});
}

export default Component;
