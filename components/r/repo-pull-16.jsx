import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv25lc1is.css';
import '../../css/e/ewgywhc6x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv25lc1is"/><path class="ewgywhc6x"/>`,
		"fallback": "octicon:repo-pull-16",
	});
}

export default Component;
