import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzofximaw.css';
import '../../css/k/kbosvfeuz.css';
import '../../css/x/xkwuocbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzofximaw"/><path class="kbosvfeuz"/><path class="xkwuocbvq"/>`,
		"fallback": "solar:paint-brush-bold",
	});
}

export default Component;
