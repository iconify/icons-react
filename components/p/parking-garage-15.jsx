import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keo41gkck.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keo41gkck"/>`,
		"fallback": "maki:parking-garage-15",
	});
}

export default Component;
