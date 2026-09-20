import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1hw_fahx.css';
import '../../css/o/odgz-_bur.css';
import '../../css/w/wrxu7obds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c1hw_fahx"/><path class="odgz-_bur"/><path class="wrxu7obds"/></g>`,
		"fallback": "streamline-kameleon-color:strawberry-duo",
	});
}

export default Component;
