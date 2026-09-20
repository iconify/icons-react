import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phr1lacdp.css';
import '../../css/c/cvbt36bli.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="phr1lacdp"/><path clip-rule="evenodd" class="cvbt36bli"/>`,
		"fallback": "qlementine-icons:photo-camera-32",
	});
}

export default Component;
