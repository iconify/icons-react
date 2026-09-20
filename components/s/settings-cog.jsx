import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnh1pz82n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cnh1pz82n"/>`,
		"fallback": "majesticons:settings-cog",
	});
}

export default Component;
