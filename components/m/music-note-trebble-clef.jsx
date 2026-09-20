import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxth-8fty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxth-8fty"/>`,
		"fallback": "streamline-sharp-color:music-note-trebble-clef",
	});
}

export default Component;
