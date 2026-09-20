import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeu22r-zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeu22r-zw"/>`,
		"fallback": "streamline-logos:macos-osx-logo-solid",
	});
}

export default Component;
