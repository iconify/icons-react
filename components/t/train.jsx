import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u93j8vb4e.css';
import '../../css/g/gt31b3bhs.css';
import '../../css/s/sck3zabtz.css';
import '../../css/a/azq9s59kw.css';
import '../../css/j/j3p_tbbha.css';
import '../../css/v/vmqd5d75a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u93j8vb4e"/><path class="gt31b3bhs"/><path class="sck3zabtz"/><path class="azq9s59kw"/><path class="j3p_tbbha"/><path class="vmqd5d75a"/>`,
		"fallback": "fxemoji:train",
	});
}

export default Component;
