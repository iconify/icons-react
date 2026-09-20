import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak6rhcbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ak6rhcbqc"/>`,
		"fallback": "nrk:warning",
	});
}

export default Component;
