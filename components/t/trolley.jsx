import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnjm8xgpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnjm8xgpo"/>`,
		"fallback": "tabler:trolley",
	});
}

export default Component;
