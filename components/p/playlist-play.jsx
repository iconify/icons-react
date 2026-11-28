import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb_cwr8ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb_cwr8ph"/>`,
		"fallback": "noviair:playlist-play",
	});
}

export default Component;
