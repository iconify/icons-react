import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnvpk6bqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wnvpk6bqg"/>`,
		"fallback": "streamline-plump:megaphone-refresh-remix",
	});
}

export default Component;
