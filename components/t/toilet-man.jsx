import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yj54-sb_b.css';
import '../../css/z/zbfk9hb2n.css';
import '../../css/a/a88hqgnix.css';
import '../../css/v/ve-3bzo3n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="yj54-sb_b"/><path class="zbfk9hb2n"/><path class="a88hqgnix"/><path class="ve-3bzo3n"/></g>`,
		"fallback": "streamline-plump-color:toilet-man",
	});
}

export default Component;
