import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0tu5dsyz.css';
import '../../css/i/if95wl24z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0tu5dsyz"/><path class="if95wl24z"/>`,
		"fallback": "boxicons:microphone-slash-filled",
	});
}

export default Component;
