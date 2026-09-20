import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnt8-f7wi.css';
import '../../css/g/gnytiu9gs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnt8-f7wi"/><path class="gnytiu9gs"/>`,
		"fallback": "streamline-pixel:social-rewards-trends-hot-flame",
	});
}

export default Component;
