import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5mzdhlgm.css';
import '../../css/w/wjafqsbeh.css';
import '../../css/s/s9be24r1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5mzdhlgm"/><path class="wjafqsbeh"/><path class="s9be24r1k"/>`,
		"fallback": "selfhst:threadfin",
	});
}

export default Component;
