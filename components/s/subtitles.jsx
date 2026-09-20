import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz3vw27bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz3vw27bw"/>`,
		"fallback": "pixelarticons:subtitles",
	});
}

export default Component;
