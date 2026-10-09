import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjbwlsbfm.css';
import '../../css/m/mdtq3-bqo.css';
import '../../css/l/l7fvvsb1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjbwlsbfm"/><path class="mdtq3-bqo"/><path class="l7fvvsb1r"/>`,
		"fallback": "energy-icons:megaphone-20-bold",
	});
}

export default Component;
