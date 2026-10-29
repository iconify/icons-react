import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxn8fwn7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxn8fwn7m"/>`,
		"fallback": "withicons:logs-solid",
	});
}

export default Component;
