import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1dhfvbmz.css';
import '../../css/c/cymo4yqyv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1dhfvbmz"/><path class="cymo4yqyv"/>`,
		"fallback": "carbon:partition-repartition",
	});
}

export default Component;
