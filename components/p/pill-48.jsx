import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glrde1b3i.css';
import '../../css/h/hgi3nccbu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glrde1b3i"/><path class="hgi3nccbu"/>`,
		"fallback": "energy-icons:pill-48",
	});
}

export default Component;
