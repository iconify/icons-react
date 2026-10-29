import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtrc3i7jy.css';
import '../../css/u/uhpcdeb9y.css';
import '../../css/x/x3akavw-n.css';
import '../../css/l/l47hb8b9y.css';
import '../../css/x/xq0o1v3pn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtrc3i7jy wm-k"/><path class="uhpcdeb9y wm-k"/><path class="wm-a x3akavw-n"/><path class="l47hb8b9y wm-k"/><path class="wm-k xq0o1v3pn"/>`,
		"fallback": "withicons-bauhaus:library",
	});
}

export default Component;
