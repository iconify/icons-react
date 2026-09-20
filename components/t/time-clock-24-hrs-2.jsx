import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgop5qb-h.css';
import '../../css/z/zoikbkqkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgop5qb-h"/><path class="zoikbkqkc"/>`,
		"fallback": "streamline-freehand:time-clock-24-hrs-2",
	});
}

export default Component;
