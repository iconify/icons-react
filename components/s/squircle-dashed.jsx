import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m49a0tnlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m49a0tnlv"/>`,
		"fallback": "lucide:squircle-dashed",
	});
}

export default Component;
