import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzvgtt3du.css';
import '../../css/b/bpyz7rbbp.css';
import '../../css/b/by5oqtcxc.css';
import '../../css/f/fr29d1bmz.css';
import '../../css/a/a5buf2f9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xzvgtt3du"/><circle class="bpyz7rbbp"/><circle class="by5oqtcxc"/><circle class="fr29d1bmz"/><path class="a5buf2f9e"/></g>`,
		"fallback": "icon-park:watermelon-one",
	});
}

export default Component;
