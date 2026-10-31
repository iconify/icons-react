import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/f/fn6nz5b1f.css';
import '../../css/i/i5k9fornz.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="fn6nz5b1f"/><path class="i5k9fornz"/>`,
		"fallback": "tabler-flags:northern-cyprus",
	});
}

export default Component;
