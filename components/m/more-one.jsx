import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1ch7ybkg.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/i/i7jv4xbcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f1ch7ybkg"/><circle class="tqb_6nb6c"/><circle class="i7jv4xbcs"/>`,
		"fallback": "icon-park:more-one",
	});
}

export default Component;
