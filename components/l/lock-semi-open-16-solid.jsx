import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgz4_hbde.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgz4_hbde"/>`,
		"fallback": "sidekickicons:lock-semi-open-16-solid",
	});
}

export default Component;
