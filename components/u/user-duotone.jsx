import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf1wx9bka.css';
import '../../css/c/czb0pkb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pf1wx9bka"/><path clip-rule="evenodd" class="czb0pkb7h"/>`,
		"fallback": "lets-icons:user-duotone",
	});
}

export default Component;
