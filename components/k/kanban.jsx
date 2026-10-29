import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqq7tyroa.css';
import '../../css/w/wfoh4bi6o.css';
import '../../css/g/gwjuwnvnc.css';
import '../../css/y/y77-atbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqq7tyroa wm-k"/><path class="wfoh4bi6o wm-a"/><path class="gwjuwnvnc wm-a"/><path class="wm-a y77-atbyf"/>`,
		"fallback": "withicons-bauhaus:kanban",
	});
}

export default Component;
