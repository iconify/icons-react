import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aih13zb3t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aih13zb3t"/>`,
		"fallback": "pinhead:person-front-kicking-wearing-martial-arts-belt",
	});
}

export default Component;
