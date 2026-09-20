import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq1uwrb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq1uwrb7y"/>`,
		"fallback": "ri:signal-cellular-1-line",
	});
}

export default Component;
