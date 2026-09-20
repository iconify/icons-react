import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv2c330tb.css';
import '../../css/o/of89spbxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv2c330tb"/><path class="of89spbxw"/>`,
		"fallback": "streamline-pixel:phone-scan-qr-code-1",
	});
}

export default Component;
