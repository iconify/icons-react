import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg8b93b9e.css';
import '../../css/i/i-8x8lbgc.css';
import '../../css/l/lsj7k9b2o.css';

const viewBox = {"width":395.51,"height":435.76,"left":16.62,"top":-1.63};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg8b93b9e"/><path class="i-8x8lbgc"/><path class="lsj7k9b2o"/>`,
		"fallback": "thesvg:open-policy-agent",
	});
}

export default Component;
