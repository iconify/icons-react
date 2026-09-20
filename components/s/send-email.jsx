import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e91abccpm.css';
import '../../css/b/bacg9dj7f.css';
import '../../css/x/x792okb-v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e91abccpm"/><path class="bacg9dj7f"/><path class="x792okb-v"/>`,
		"fallback": "streamline-pixel:send-email",
	});
}

export default Component;
