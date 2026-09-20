import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtp5fgbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtp5fgbmd"/>`,
		"fallback": "ri:sticky-note-2-fill-2",
	});
}

export default Component;
