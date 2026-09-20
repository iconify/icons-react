import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1og6cbek.css';
import '../../css/b/bh-4vfbma.css';
import '../../css/u/u5e77cb7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p1og6cbek"/><path class="bh-4vfbma"/><path clip-rule="evenodd" class="u5e77cb7g"/>`,
		"fallback": "selfhst:mariadb",
	});
}

export default Component;
