import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd99cys7x.css';
import '../../css/y/y00wue9pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd99cys7x"/><path class="y00wue9pd"/>`,
		"fallback": "solar:plane-2-bold",
	});
}

export default Component;
