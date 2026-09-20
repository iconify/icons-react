import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlg_8-b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nlg_8-b-e"/>`,
		"fallback": "streamline-logos:microsoft-teams-logo-block",
	});
}

export default Component;
