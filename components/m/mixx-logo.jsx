import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyvd79o9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyvd79o9j"/>`,
		"fallback": "streamline-logos:mixx-logo",
	});
}

export default Component;
