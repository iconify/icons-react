import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxscixp0f.css';
import '../../css/l/liyj23bun.css';
import '../../css/o/omvia3qke.css';
import '../../css/n/n1-ol-blu.css';
import '../../css/t/t7qu00-xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kxscixp0f"><path class="liyj23bun"/><path class="omvia3qke"/><path class="n1-ol-blu"/><path class="t7qu00-xd"/></g>`,
		"fallback": "material-icon-theme:kcl",
	});
}

export default Component;
