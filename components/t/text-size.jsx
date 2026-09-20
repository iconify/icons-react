import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we6n59b6n.css';
import '../../css/n/nmu_9kcuc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we6n59b6n"/><path class="nmu_9kcuc"/>`,
		"fallback": "nimbus:text-size",
	});
}

export default Component;
