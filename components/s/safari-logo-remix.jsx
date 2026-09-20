import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw_-m2kon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qw_-m2kon"/>`,
		"fallback": "streamline-sharp:safari-logo-remix",
	});
}

export default Component;
