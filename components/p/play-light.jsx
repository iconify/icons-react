import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uczwstkjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uczwstkjd"/>`,
		"fallback": "stash:play-light",
	});
}

export default Component;
