import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/u/uymji-b5s.css';
import '../../css/c/cwiea-93g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="uymji-b5s"/><path class="cwiea-93g"/></g>`,
		"fallback": "streamline-cyber:macro-mode",
	});
}

export default Component;
