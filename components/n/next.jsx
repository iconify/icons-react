import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enc17mb1s.css';
import '../../css/l/l7hcm5_mu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enc17mb1s"/><path class="l7hcm5_mu"/>`,
		"fallback": "icomoon-free:next",
	});
}

export default Component;
