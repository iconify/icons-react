import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdg-jhb7z.css';
import '../../css/i/iz9lg-b_o.css';
import '../../css/z/zfepqbc3e.css';
import '../../css/z/zqalz-5cg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdg-jhb7z"/><path class="iz9lg-b_o"/><path class="zfepqbc3e"/><path class="zqalz-5cg"/>`,
		"fallback": "fluent-emoji-high-contrast:man-frowning",
	});
}

export default Component;
