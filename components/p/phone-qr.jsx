import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naapkv9xe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naapkv9xe"/>`,
		"fallback": "streamline-flex:phone-qr",
	});
}

export default Component;
