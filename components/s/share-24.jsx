import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtlt29bxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jtlt29bxi"/>`,
		"fallback": "qlementine-icons:share-24",
	});
}

export default Component;
