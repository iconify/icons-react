import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5zdp7brd.css';
import '../../css/q/q1fnmujdu.css';
import '../../css/b/bjuc6lcvi.css';
import '../../css/j/jmj296b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5zdp7brd wm-k"/><path class="q1fnmujdu wm-k"/><path class="bjuc6lcvi wm-a"/><path class="jmj296b2v wm-a"/>`,
		"fallback": "withicons-bauhaus:layout-list",
	});
}

export default Component;
