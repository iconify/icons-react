import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-kbjab1h.css';
import '../../css/z/z7n6cqbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-kbjab1h"/><path class="z7n6cqbag"/>`,
		"fallback": "boxicons:train",
	});
}

export default Component;
