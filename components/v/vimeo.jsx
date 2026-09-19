import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scy39oqis.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scy39oqis"/>`,
		"fallback": "icomoon-free:vimeo",
	});
}

export default Component;
