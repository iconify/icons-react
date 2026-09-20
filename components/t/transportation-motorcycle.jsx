import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4uiwqbnk.css';
import '../../css/i/it_a7iblf.css';
import '../../css/z/z1wf33p3v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4uiwqbnk"/><path class="it_a7iblf"/><path class="z1wf33p3v"/>`,
		"fallback": "streamline-pixel:transportation-motorcycle",
	});
}

export default Component;
