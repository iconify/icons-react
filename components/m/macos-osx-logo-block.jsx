import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx_7q067g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fx_7q067g"/>`,
		"fallback": "streamline-logos:macos-osx-logo-block",
	});
}

export default Component;
