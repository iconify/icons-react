import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw5hcaclv.css';

const viewBox = {"width":464,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw5hcaclv"/>`,
		"fallback": "ps:openid",
	});
}

export default Component;
