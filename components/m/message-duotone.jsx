import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av6p3g-os.css';
import '../../css/h/hdmntob4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av6p3g-os"/><path class="hdmntob4j"/>`,
		"fallback": "lets-icons:message-duotone",
	});
}

export default Component;
