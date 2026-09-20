import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz6ijjbgq.css';
import '../../css/q/qj14hob_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz6ijjbgq"/><path class="qj14hob_f"/>`,
		"fallback": "oui:redeploy",
	});
}

export default Component;
