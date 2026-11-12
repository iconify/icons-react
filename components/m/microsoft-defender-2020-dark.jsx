import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/josfuibqz.css';
import '../../css/r/rjrd0gg6j.css';
import '../../css/j/ji04dtbnw.css';
import '../../css/a/aw5lgtfph.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="josfuibqz"/><path class="rjrd0gg6j"/><path class="ji04dtbnw"/><path class="aw5lgtfph"/>`,
		"fallback": "selfhst:microsoft-defender-2020-dark",
	});
}

export default Component;
