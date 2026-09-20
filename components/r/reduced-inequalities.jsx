import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/a3qy1i52u.css';
import '../../css/m/me7-g1bpg.css';
import '../../css/k/k1en1acng.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="a3qy1i52u"/><path class="me7-g1bpg"/><path class="k1en1acng"/></g>`,
		"fallback": "streamline-plump-color:reduced-inequalities",
	});
}

export default Component;
