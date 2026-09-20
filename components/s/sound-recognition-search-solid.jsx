import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bykfut8oz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bykfut8oz"/>`,
		"fallback": "streamline-flex:sound-recognition-search-solid",
	});
}

export default Component;
