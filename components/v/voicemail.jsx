import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxxb01b_v.css';

const viewBox = {"width":24,"height":24,"top":-6.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxxb01b_v"/>`,
		"fallback": "jam:voicemail",
	});
}

export default Component;
