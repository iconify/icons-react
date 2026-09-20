import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r21_olbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r21_olbqc"/>`,
		"fallback": "streamline-sharp:play-list-1-remix",
	});
}

export default Component;
