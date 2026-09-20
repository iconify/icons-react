import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osdr6bbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osdr6bbou"/>`,
		"fallback": "streamline-ultimate:team-meeting-bold",
	});
}

export default Component;
