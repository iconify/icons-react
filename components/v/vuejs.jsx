import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8ierubxq.css';
import '../../css/k/krjlj6ycb.css';
import '../../css/l/l3txyjb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8ierubxq"/><path class="krjlj6ycb"/><path class="l3txyjb4h"/>`,
		"fallback": "uim:vuejs",
	});
}

export default Component;
