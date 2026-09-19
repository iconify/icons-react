import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpeh4lb3t.css';
import '../../css/p/pan8axb2r.css';
import '../../css/k/kfb89rzgg.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpeh4lb3t"/><path class="pan8axb2r"/><path class="kfb89rzgg"/>`,
		"fallback": "formkit:table",
	});
}

export default Component;
