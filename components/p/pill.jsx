import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5a3lk7dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5a3lk7dv"/>`,
		"fallback": "tabler:pill",
	});
}

export default Component;
