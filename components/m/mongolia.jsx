import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai5y9abrj.css';
import '../../css/t/t5wv3ubfi.css';
import '../../css/v/vlejwkz4c.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai5y9abrj"/><path class="t5wv3ubfi"/><path class="vlejwkz4c"/>`,
		"fallback": "tabler-flags:mongolia",
	});
}

export default Component;
