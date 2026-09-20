import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loi6l0bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loi6l0bhq"/>`,
		"fallback": "thesvg-color:tubi",
	});
}

export default Component;
