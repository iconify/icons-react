import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq5pbvfxc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eq5pbvfxc"/>`,
		"fallback": "streamline:warning-octagon-solid",
	});
}

export default Component;
