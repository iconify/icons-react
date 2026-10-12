import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlh7a3iac.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlh7a3iac"/>`,
		"fallback": "garden:logo-github-20",
	});
}

export default Component;
