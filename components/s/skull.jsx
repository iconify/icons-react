import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8zjprbue.css';
import '../../css/o/o9cqsdb8n.css';
import '../../css/r/rua3i3zlo.css';
import '../../css/w/w44oc6c8f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8zjprbue"/><path class="o9cqsdb8n"/><path class="rua3i3zlo"/><path class="w44oc6c8f"/>`,
		"fallback": "fxemoji:skull",
	});
}

export default Component;
