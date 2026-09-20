import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olznt6bba.css';
import '../../css/a/augpk_bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olznt6bba"/><path class="augpk_bbg"/>`,
		"fallback": "prime:search-minus",
	});
}

export default Component;
