import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgvq-7bzz.css';
import '../../css/k/kh19l6bin.css';
import '../../css/t/trqox8lmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgvq-7bzz"/><path class="kh19l6bin"/><path class="trqox8lmu"/>`,
		"fallback": "selfhst:raindrop-io",
	});
}

export default Component;
