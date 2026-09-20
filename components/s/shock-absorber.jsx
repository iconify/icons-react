import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw1iverzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qw1iverzp"/>`,
		"fallback": "reicon:shock-absorber",
	});
}

export default Component;
