import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvxr7fbch.css';
import '../../css/j/jlcpzc1mg.css';
import '../../css/x/x-x_aeb_o.css';
import '../../css/w/wwjpj7b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvxr7fbch"/><path class="jlcpzc1mg"/><path class="x-x_aeb_o"/><path class="wwjpj7b0k"/>`,
		"fallback": "streamline-freehand:video-edit-play",
	});
}

export default Component;
