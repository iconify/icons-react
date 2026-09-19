import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f69ughbml.css';
import '../../css/i/iass40n0e.css';
import '../../css/h/h79q5vbot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="f69ughbml"/><circle class="iass40n0e"/><path class="h79q5vbot"/></g>`,
		"fallback": "icon-park-solid:warehousing",
	});
}

export default Component;
