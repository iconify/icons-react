import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lffxmfbco.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lffxmfbco"/>`,
		"fallback": "f7:phone-fill-arrow-right",
	});
}

export default Component;
