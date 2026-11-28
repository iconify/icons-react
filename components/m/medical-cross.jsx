import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeu0v89pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeu0v89pr"/>`,
		"fallback": "noviair:medical-cross",
	});
}

export default Component;
