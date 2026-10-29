import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dokoaksqo.css';
import '../../css/c/ctq4xqiww.css';
import '../../css/v/vnn8mmbds.css';
import '../../css/a/a_0-o2q0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dokoaksqo wm-k"/><path class="ctq4xqiww wm-k"/><path class="vnn8mmbds wm-a"/><path class="a_0-o2q0s wm-a"/>`,
		"fallback": "withicons-bauhaus:shuffle",
	});
}

export default Component;
