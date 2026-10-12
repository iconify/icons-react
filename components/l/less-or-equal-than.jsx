import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfvpj05yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfvpj05yq"/>`,
		"fallback": "andrsrxn:less-or-equal-than",
	});
}

export default Component;
