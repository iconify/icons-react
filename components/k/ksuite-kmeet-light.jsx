import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0zrdacze.css';
import '../../css/y/ytt2rub5i.css';
import '../../css/x/x0ucnnbbj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0zrdacze"/><path class="ytt2rub5i"/><path class="x0ucnnbbj"/>`,
		"fallback": "selfhst:ksuite-kmeet-light",
	});
}

export default Component;
