import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3qd3j95h.css';
import '../../css/r/rixxe_b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3qd3j95h"/><path class="rixxe_b4n"/>`,
		"fallback": "uim:unlock-alt",
	});
}

export default Component;
