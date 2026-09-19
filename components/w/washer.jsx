import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnpzzt4xm.css';
import '../../css/b/bq6s9dbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnpzzt4xm"/><path class="bq6s9dbyw"/>`,
		"fallback": "boxicons:washer",
	});
}

export default Component;
