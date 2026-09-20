import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzmi_8kui.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzmi_8kui"/>`,
		"fallback": "ix:user-profile",
	});
}

export default Component;
