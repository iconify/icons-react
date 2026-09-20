import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cusa6cggl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cusa6cggl"/>`,
		"fallback": "reicon:paperclip3-filled",
	});
}

export default Component;
