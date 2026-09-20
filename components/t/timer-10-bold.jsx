import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dulwwp61c.css';
import '../../css/v/vun5vpb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dulwwp61c"/><path class="vun5vpb1i"/>`,
		"fallback": "streamline-ultimate:timer-10-bold",
	});
}

export default Component;
