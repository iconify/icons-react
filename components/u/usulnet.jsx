import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp-srlbgu.css';
import '../../css/w/w2xbvabvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp-srlbgu"/><path class="w2xbvabvv"/>`,
		"fallback": "selfhst:usulnet",
	});
}

export default Component;
