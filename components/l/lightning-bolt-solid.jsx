import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6m28kyyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6m28kyyp"/>`,
		"fallback": "nrk:lightning-bolt-solid",
	});
}

export default Component;
