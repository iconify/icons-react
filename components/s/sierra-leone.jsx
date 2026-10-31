import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/f/f8ne6yb3c.css';
import '../../css/x/xi88efb4t.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="f8ne6yb3c"/><path class="xi88efb4t"/>`,
		"fallback": "tabler-flags:sierra-leone",
	});
}

export default Component;
