import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx1ed53-h.css';
import '../../css/k/kmzi6e6ft.css';
import '../../css/j/josq1jb8s.css';
import '../../css/k/kmynck5lr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx1ed53-h"/><path class="kmzi6e6ft"/><path class="josq1jb8s"/><path class="kmynck5lr"/>`,
		"fallback": "selfhst:ksuite-swisstransfer",
	});
}

export default Component;
