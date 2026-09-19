import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icsbmobje.css';
import '../../css/b/bweidcb3i.css';
import '../../css/f/fktdbrb-z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icsbmobje"/><path class="bweidcb3i"/><path class="fktdbrb-z"/>`,
		"fallback": "carbon:two-person-lift",
	});
}

export default Component;
