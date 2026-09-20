import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sacqf7sjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sacqf7sjo"/>`,
		"fallback": "streamline-ultimate:volume-control-mute-1",
	});
}

export default Component;
