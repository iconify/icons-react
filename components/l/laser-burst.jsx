import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9s3b7bjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9s3b7bjq"/>`,
		"fallback": "game-icons:laser-burst",
	});
}

export default Component;
