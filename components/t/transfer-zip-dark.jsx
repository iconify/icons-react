import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyym7th_s.css';
import '../../css/q/qh35-indc.css';
import '../../css/g/gegqcfbxn.css';
import '../../css/s/s16aoqb6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyym7th_s"/><path class="qh35-indc"/><path class="gegqcfbxn"/><path class="s16aoqb6n"/>`,
		"fallback": "selfhst:transfer-zip-dark",
	});
}

export default Component;
