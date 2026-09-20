import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avdx2ebrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="avdx2ebrx"/>`,
		"fallback": "streamline-logos:livejournal-logo-block",
	});
}

export default Component;
