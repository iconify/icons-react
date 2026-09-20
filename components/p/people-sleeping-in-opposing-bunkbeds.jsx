import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dup2ybc4g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dup2ybc4g"/>`,
		"fallback": "pinhead:people-sleeping-in-opposing-bunkbeds",
	});
}

export default Component;
