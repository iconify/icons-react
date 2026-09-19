import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpdcd9hma.css';

const viewBox = {"width":960,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpdcd9hma"/>`,
		"fallback": "whh:powerjack",
	});
}

export default Component;
