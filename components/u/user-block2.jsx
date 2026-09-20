import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxvs0utbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xxvs0utbx"/>`,
		"fallback": "reicon:user-block2",
	});
}

export default Component;
