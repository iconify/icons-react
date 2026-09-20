import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw9buib9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw9buib9a"/>`,
		"fallback": "solar:stop-broken",
	});
}

export default Component;
