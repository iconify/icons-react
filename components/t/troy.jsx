import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avagvcb4q.css';
import '../../css/y/ydk2xxbih.css';
import '../../css/j/j1it0mrui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avagvcb4q"/><path clip-rule="evenodd" class="ydk2xxbih"/><path class="j1it0mrui"/>`,
		"fallback": "token:troy",
	});
}

export default Component;
