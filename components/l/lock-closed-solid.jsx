import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3yhdgb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z3yhdgb_b"/>`,
		"fallback": "heroicons:lock-closed-solid",
	});
}

export default Component;
