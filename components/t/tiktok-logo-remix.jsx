import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxhy2qbzu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rxhy2qbzu"/>`,
		"fallback": "streamline-flex:tiktok-logo-remix",
	});
}

export default Component;
