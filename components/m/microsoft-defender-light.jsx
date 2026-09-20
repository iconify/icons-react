import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b70-wwoww.css';
import '../../css/v/vgzbicbpw.css';
import '../../css/i/ilgbhxbln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b70-wwoww"/><path class="vgzbicbpw"/><path class="ilgbhxbln"/>`,
		"fallback": "selfhst:microsoft-defender-light",
	});
}

export default Component;
