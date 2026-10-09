import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy1qryb3w.css';
import '../../css/f/fd6b2rb5y.css';
import '../../css/v/voepl3b-a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy1qryb3w"/><path class="fd6b2rb5y"/><path class="voepl3b-a"/>`,
		"fallback": "energy-icons:plug-in-hybrid-20-bold",
	});
}

export default Component;
