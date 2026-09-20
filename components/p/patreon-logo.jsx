import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mec9qplzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mec9qplzt"/>`,
		"fallback": "streamline-logos:patreon-logo",
	});
}

export default Component;
