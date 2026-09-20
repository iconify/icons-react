import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akl-4bbmb.css';
import '../../css/b/b08tyi05f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akl-4bbmb"/><path class="b08tyi05f"/>`,
		"fallback": "tdesign:logo-wechat-stroke-filled",
	});
}

export default Component;
