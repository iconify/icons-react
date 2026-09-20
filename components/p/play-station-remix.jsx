import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gau3hwb5p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gau3hwb5p"/>`,
		"fallback": "streamline:play-station-remix",
	});
}

export default Component;
