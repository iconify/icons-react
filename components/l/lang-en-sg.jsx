import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pk7l-lh9v.css';
import '../../css/h/hqgavr6na.css';
import '../../css/y/y8tdl36bw.css';
import '../../css/y/yvjv1pirb.css';
import '../../css/c/c2kfkubvk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="pk7l-lh9v"/><path class="hqgavr6na"/><path class="y8tdl36bw"/><path class="yvjv1pirb"/><path class="c2kfkubvk"/></g>`,
		"fallback": "circle-flags:lang-en-sg",
	});
}

export default Component;
