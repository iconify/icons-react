import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw6bhtqns.css';
import '../../css/s/sfw4e80bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw6bhtqns"/><path class="sfw4e80bn"/>`,
		"fallback": "octicon:repo-clone-24",
	});
}

export default Component;
