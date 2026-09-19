import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv42co59p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv42co59p"/>`,
		"fallback": "cbi:sonos-playbar",
	});
}

export default Component;
