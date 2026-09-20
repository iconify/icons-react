import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb06wxbvq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kb06wxbvq"/>`,
		"fallback": "streamline-flex:phone-qr-solid",
	});
}

export default Component;
