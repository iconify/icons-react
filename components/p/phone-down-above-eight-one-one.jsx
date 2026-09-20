import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-1uf6h2j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-1uf6h2j"/>`,
		"fallback": "pinhead:phone-down-above-eight-one-one",
	});
}

export default Component;
