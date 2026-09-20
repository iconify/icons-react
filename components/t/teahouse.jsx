import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpd7kl_ln.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpd7kl_ln"/>`,
		"fallback": "maki:teahouse",
	});
}

export default Component;
