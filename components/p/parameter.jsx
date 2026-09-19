import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5gmkxb2i.css';
import '../../css/m/m_zeiqb1i.css';
import '../../css/b/bqm3pcmff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5gmkxb2i"/><path class="m_zeiqb1i"/><path class="bqm3pcmff"/>`,
		"fallback": "carbon:parameter",
	});
}

export default Component;
