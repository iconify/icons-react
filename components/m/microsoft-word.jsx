import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do1g0fkgq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do1g0fkgq"/>`,
		"fallback": "file-icons:microsoft-word",
	});
}

export default Component;
