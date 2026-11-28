import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxnw1wbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxnw1wbcf"/>`,
		"fallback": "noviair:sticky-note-x",
	});
}

export default Component;
