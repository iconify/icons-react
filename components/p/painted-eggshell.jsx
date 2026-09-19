import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg937_1md.css';
import '../../css/b/bbthzgo7i.css';
import '../../css/j/jef6gtb-c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sg937_1md"/><path class="bbthzgo7i"/><path clip-rule="evenodd" class="jef6gtb-c"/></g>`,
		"fallback": "icon-park:painted-eggshell",
	});
}

export default Component;
