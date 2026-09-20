import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_mebygut.css';
import '../../css/j/jmg8jub9f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_mebygut"/><path class="jmg8jub9f"/>`,
		"fallback": "streamline-pixel:interface-essential-note-music",
	});
}

export default Component;
