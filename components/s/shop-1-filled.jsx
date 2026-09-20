import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr6qntbff.css';
import '../../css/y/y6q6mnb3i.css';
import '../../css/r/re7ja8bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr6qntbff"/><path class="y6q6mnb3i"/><path class="re7ja8bkq"/>`,
		"fallback": "tdesign:shop-1-filled",
	});
}

export default Component;
