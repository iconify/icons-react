import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs63rmt4l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cj7qh-02u.css';
import '../../css/r/r8xumq8dh.css';
import '../../css/w/wvsuvupws.css';
import '../../css/j/ju0840bmy.css';
import '../../css/v/vjzau-ekp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs63rmt4l secondary"/><g class="dt0cm9dhy primary"><path class="cj7qh-02u"/><path class="r8xumq8dh"/><path class="wvsuvupws"/><path class="ju0840bmy"/><path class="vjzau-ekp"/></g>`,
		"fallback": "iconaut:speech-to-text-duo",
	});
}

export default Component;
