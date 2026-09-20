import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwq-pqbys.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwq-pqbys"/>`,
		"fallback": "maki:racetrack-boat",
	});
}

export default Component;
