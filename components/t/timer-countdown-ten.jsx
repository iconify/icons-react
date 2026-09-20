import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdnqinu8h.css';
import '../../css/h/hmnz6jb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdnqinu8h"/><path class="hmnz6jb5s"/>`,
		"fallback": "streamline-freehand:timer-countdown-ten",
	});
}

export default Component;
