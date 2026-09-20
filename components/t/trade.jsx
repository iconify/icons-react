import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf04vdtkp.css';
import '../../css/y/yxe08ybje.css';
import '../../css/q/q1bn-vbpz.css';
import '../../css/a/a6c4neb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf04vdtkp"/><path class="yxe08ybje"/><path clip-rule="evenodd" class="q1bn-vbpz"/><path class="a6c4neb-s"/>`,
		"fallback": "token:trade",
	});
}

export default Component;
