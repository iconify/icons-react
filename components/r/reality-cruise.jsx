import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t952hccfk.css';
import '../../css/k/khdbqyorx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t952hccfk"/><path class="khdbqyorx"/>`,
		"fallback": "selfhst:reality-cruise",
	});
}

export default Component;
