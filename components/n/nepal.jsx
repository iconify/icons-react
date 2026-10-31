import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/i/i5t49dnmi.css';
import '../../css/n/n-4-una-s.css';
import '../../css/c/cbjdd2zsr.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="i5t49dnmi"/><path class="n-4-una-s"/><path class="cbjdd2zsr"/>`,
		"fallback": "tabler-flags:nepal",
	});
}

export default Component;
