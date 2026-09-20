import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3ekrbc4n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3ekrbc4n"/>`,
		"fallback": "lsicon:sunny-outline",
	});
}

export default Component;
