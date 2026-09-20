import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo25cncdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo25cncdu"/>`,
		"fallback": "simple-icons:spaceship",
	});
}

export default Component;
