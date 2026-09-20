import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnawj1_sa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnawj1_sa"/>`,
		"fallback": "pinhead:person-boarding-steam-train-on-railway-track",
	});
}

export default Component;
