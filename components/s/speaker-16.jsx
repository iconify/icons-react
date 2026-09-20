import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7kzsmf7u.css';
import '../../css/s/s9rahug_l.css';
import '../../css/v/vx3hl8b7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i7kzsmf7u"/><path class="s9rahug_l"/><path class="vx3hl8b7t"/>`,
		"fallback": "qlementine-icons:speaker-16",
	});
}

export default Component;
