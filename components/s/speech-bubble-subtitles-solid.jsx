import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdm8trd6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bdm8trd6l"/>`,
		"fallback": "nrk:speech-bubble-subtitles-solid",
	});
}

export default Component;
