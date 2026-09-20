import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj-q25bgf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj-q25bgf"/>`,
		"fallback": "pinhead:phone-down-above-911",
	});
}

export default Component;
