import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iub38o1gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iub38o1gs"/>`,
		"fallback": "lucide:japanese-yen",
	});
}

export default Component;
