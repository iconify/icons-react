import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/c/cai_u9bxk.css';
import '../../css/n/nmdca2b9w.css';
import '../../css/l/ltbe27b-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="cai_u9bxk"/><path clip-rule="evenodd" class="nmdca2b9w"/><path class="ltbe27b-r"/></g>`,
		"fallback": "streamline-kameleon-color:medicine-pop",
	});
}

export default Component;
