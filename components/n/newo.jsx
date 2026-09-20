import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usp1xgb4w.css';
import '../../css/v/v0z-2fb7a.css';
import '../../css/z/zy-_uac9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usp1xgb4w"/><path class="v0z-2fb7a"/><path class="zy-_uac9j"/>`,
		"fallback": "token:newo",
	});
}

export default Component;
