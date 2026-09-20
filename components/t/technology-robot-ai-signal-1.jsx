import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2pwpobeg.css';
import '../../css/c/cppen0opw.css';
import '../../css/j/j48i5u89u.css';
import '../../css/z/z0tdqsb0j.css';
import '../../css/g/gu2hqrblc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2pwpobeg"/><path class="cppen0opw"/><path class="j48i5u89u"/><path class="z0tdqsb0j"/><path class="gu2hqrblc"/>`,
		"fallback": "streamline-pixel:technology-robot-ai-signal-1",
	});
}

export default Component;
