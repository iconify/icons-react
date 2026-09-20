import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4wd_7bju.css';
import '../../css/w/wnjg76bsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4wd_7bju"/><path class="wnjg76bsw"/>`,
		"fallback": "selfhst:portainer-pink",
	});
}

export default Component;
