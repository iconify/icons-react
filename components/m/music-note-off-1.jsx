import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x489fphor.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x489fphor"/>`,
		"fallback": "streamline:music-note-off-1",
	});
}

export default Component;
