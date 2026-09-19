import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/j222h5b5x.css';
import '../../css/d/d7aug1b2m.css';
import '../../css/e/e5jk9c-yn.css';
import '../../css/g/gqizmlvif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="j222h5b5x"/><path class="d7aug1b2m"/><path class="e5jk9c-yn"/><path class="gqizmlvif"/></g>`,
		"fallback": "circle-flags:lang-te",
	});
}

export default Component;
