import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgt55-51t.css';
import '../../css/j/jratsslgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgt55-51t"/><path class="jratsslgt"/>`,
		"fallback": "stash:screw-nut-light",
	});
}

export default Component;
