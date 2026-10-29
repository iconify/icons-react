import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls90sccbc.css';
import '../../css/z/z72p7wbvz.css';
import '../../css/w/w6tbsj31t.css';
import '../../css/v/vj7jxi4uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls90sccbc wm-k"/><path class="wm-k z72p7wbvz"/><path class="w6tbsj31t wm-a"/><path class="vj7jxi4uw wm-a"/>`,
		"fallback": "withicons-bauhaus:smartphone",
	});
}

export default Component;
