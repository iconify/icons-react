import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s58yrv62u.css';
import '../../css/h/hkyycvtfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s58yrv62u"/><path class="hkyycvtfp"/>`,
		"fallback": "stash:user-plus-light",
	});
}

export default Component;
