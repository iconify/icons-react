import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7l6jtghu.css';
import '../../css/j/jeg4l5bwa.css';
import '../../css/q/qviplbbsj.css';
import '../../css/q/qvjnwub0v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle transform="rotate(-89.685 70.225 441.78)" class="w7l6jtghu"/><path class="jeg4l5bwa"/><path class="qviplbbsj"/><path class="qvjnwub0v"/>`,
		"fallback": "selfhst:tiny-tiny-rss-light",
	});
}

export default Component;
