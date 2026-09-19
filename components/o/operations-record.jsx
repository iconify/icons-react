import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evzzowain.css';
import '../../css/p/p0vee9bvv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evzzowain"/><path class="p0vee9bvv"/>`,
		"fallback": "carbon:operations-record",
	});
}

export default Component;
