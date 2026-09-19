import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuu1fpbjf.css';
import '../../css/d/dxbj9hbfy.css';
import '../../css/v/vawhvpbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xuu1fpbjf"/><path class="dxbj9hbfy"/><path clip-rule="evenodd" class="vawhvpbke"/>`,
		"fallback": "basil:user-block-outline",
	});
}

export default Component;
