import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0r-oet8f.css';
import '../../css/v/vkff342ar.css';
import '../../css/a/a8o9o1rkv.css';
import '../../css/s/s2c20nshg.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0r-oet8f"/><path class="vkff342ar"/><path class="a8o9o1rkv"/><path class="s2c20nshg"/>`,
		"fallback": "tabler-flags:suriname",
	});
}

export default Component;
