import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rah-ahc6o.css';
import '../../css/f/ftow8i2ka.css';
import '../../css/y/ya4teowol.css';
import '../../css/q/qgq39xbll.css';
import '../../css/n/nhl7j3qoj.css';
import '../../css/o/onnag6bdf.css';
import '../../css/r/rw6y0ek7p.css';
import '../../css/n/nsxx38yxy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rah-ahc6o"/><path class="ftow8i2ka"/><path class="ya4teowol"/><path class="qgq39xbll"/><path class="nhl7j3qoj"/><path class="onnag6bdf"/><path class="rw6y0ek7p"/><path class="nsxx38yxy"/>`,
		"fallback": "openmoji:studio-microphone",
	});
}

export default Component;
