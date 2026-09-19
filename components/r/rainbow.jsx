import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi4f11bjo.css';
import '../../css/e/eycsbubwb.css';
import '../../css/z/z4z9i4luq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi4f11bjo"/><path class="eycsbubwb"/><path class="z4z9i4luq"/>`,
		"fallback": "circum:rainbow",
	});
}

export default Component;
