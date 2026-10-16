import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhhiamiic.css';
import '../../css/e/efnhhmbhc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhhiamiic"/><path class="efnhhmbhc"/>`,
		"fallback": "energy-icons:tabs-20",
	});
}

export default Component;
