import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8eaj-gjj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r8eaj-gjj"/>`,
		"fallback": "streamline-plump:slack-logo-remix",
	});
}

export default Component;
