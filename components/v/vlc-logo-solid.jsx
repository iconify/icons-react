import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukk6o2w9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ukk6o2w9t"/>`,
		"fallback": "streamline-logos:vlc-logo-solid",
	});
}

export default Component;
