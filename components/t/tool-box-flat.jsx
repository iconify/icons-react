import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb1--mtuh.css';
import '../../css/u/u647x2b3c.css';
import '../../css/l/l2qw7hd7u.css';
import '../../css/n/nhozc069a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jb1--mtuh"/><path class="u647x2b3c"/><path class="l2qw7hd7u"/><path class="nhozc069a"/></g>`,
		"fallback": "streamline-plump-color:tool-box-flat",
	});
}

export default Component;
