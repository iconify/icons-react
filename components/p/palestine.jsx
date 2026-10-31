import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/y/y55zcjfsz.css';
import '../../css/o/ozhv1qh5i.css';
import '../../css/i/imje9zb8i.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="y55zcjfsz"/><path class="ozhv1qh5i"/><path class="imje9zb8i"/>`,
		"fallback": "tabler-flags:palestine",
	});
}

export default Component;
