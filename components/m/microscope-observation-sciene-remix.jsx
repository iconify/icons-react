import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5s7crwwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d5s7crwwt"/>`,
		"fallback": "streamline-sharp:microscope-observation-sciene-remix",
	});
}

export default Component;
