import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh82h5geo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xh82h5geo"/>`,
		"fallback": "keyline-icons:subtitles-fill",
	});
}

export default Component;
