import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buwksiwwv.css';
import '../../css/a/a6dsmibvs.css';
import '../../css/u/u9-lmsbri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buwksiwwv"/><path class="a6dsmibvs"/><path class="u9-lmsbri"/>`,
		"fallback": "selfhst:pyload",
	});
}

export default Component;
