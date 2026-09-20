import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waw-uxbxv.css';
import '../../css/z/zgt55-51t.css';
import '../../css/t/thnkyr3yj.css';
import '../../css/d/dgxfih-4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="waw-uxbxv"/><path class="zgt55-51t"/><path class="thnkyr3yj"/><path class="dgxfih-4q"/>`,
		"fallback": "stash:life-ring-duotone",
	});
}

export default Component;
