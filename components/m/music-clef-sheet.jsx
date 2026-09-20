import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j---shb0m.css';
import '../../css/n/neea8pi3k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j---shb0m"/><path class="neea8pi3k"/>`,
		"fallback": "streamline-pixel:music-clef-sheet",
	});
}

export default Component;
