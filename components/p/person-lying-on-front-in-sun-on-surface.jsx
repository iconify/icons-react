import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsm-84idg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsm-84idg"/>`,
		"fallback": "pinhead:person-lying-on-front-in-sun-on-surface",
	});
}

export default Component;
