import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xku02obww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xku02obww"/>`,
		"fallback": "streamline-logos:macos-osx-logo",
	});
}

export default Component;
