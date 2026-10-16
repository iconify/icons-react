import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdaustbot.css';

const viewBox = {"width":1575.6,"height":1575.6,"left":82.5,"top":-157.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdaustbot"/>`,
		"fallback": "thesvg-color:mailhog",
	});
}

export default Component;
