import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cho9kmb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cho9kmb4f"/>`,
		"fallback": "tdesign:logo-wechat-workdocs",
	});
}

export default Component;
