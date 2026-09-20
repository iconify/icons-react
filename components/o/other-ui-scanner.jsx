import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlrnkabpe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlrnkabpe"/>`,
		"fallback": "streamline-block:other-ui-scanner",
	});
}

export default Component;
