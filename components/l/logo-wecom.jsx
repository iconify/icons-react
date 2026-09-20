import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs0didbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs0didbcc"/>`,
		"fallback": "tdesign:logo-wecom",
	});
}

export default Component;
