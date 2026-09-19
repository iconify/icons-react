import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awsw08b3r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awsw08b3r"/>`,
		"fallback": "icomoon-free:volume-decrease",
	});
}

export default Component;
