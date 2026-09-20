import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpx15_bzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vpx15_bzd"/>`,
		"fallback": "streamline-ultimate:subtitles-bold",
	});
}

export default Component;
