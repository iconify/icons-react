import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s49egpb6a.css';
import '../../css/s/shjni7sxm.css';
import '../../css/k/kpjpdmbqu.css';

const viewBox = {"width":256,"height":233};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s49egpb6a"/><path class="shjni7sxm"/><path class="kpjpdmbqu"/>`,
		"fallback": "thesvg-color:typeorm",
	});
}

export default Component;
