import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajach0a3z.css';
import '../../css/f/fyvg948cl.css';
import '../../css/x/xpigs6blj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajach0a3z"/><path class="fyvg948cl"/><path class="xpigs6blj"/>`,
		"fallback": "energy-icons:sluice-gate-20",
	});
}

export default Component;
