import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwlj-u0wk.css';
import '../../css/r/r1-7yy7ih.css';
import '../../css/r/rnvq-7b5b.css';
import '../../css/a/a7-07hblu.css';
import '../../css/j/jvwylz30c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jwlj-u0wk"/><path class="r1-7yy7ih"/><path class="rnvq-7b5b"/><path class="a7-07hblu"/><path class="jvwylz30c"/></g>`,
		"fallback": "streamline-ultimate-color:synchronize-arrows-three",
	});
}

export default Component;
