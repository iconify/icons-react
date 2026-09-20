import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0qoc6rgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0qoc6rgw"/>`,
		"fallback": "stash:sliders-h-light",
	});
}

export default Component;
