import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6c40bb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6c40bb_s"/>`,
		"fallback": "streamline-sharp:office-building-2-solid",
	});
}

export default Component;
