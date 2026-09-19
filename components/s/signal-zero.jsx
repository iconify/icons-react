import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxn_qk47p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxn_qk47p"/>`,
		"fallback": "hugeicons:signal-zero",
	});
}

export default Component;
