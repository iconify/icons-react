import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc_2pfb3v.css';
import '../../css/z/zz8dk9k1j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc_2pfb3v"/><path class="zz8dk9k1j"/>`,
		"fallback": "material-icon-theme:objective-cpp",
	});
}

export default Component;
