import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vburjzbet.css';
import '../../css/d/dn60esb4g.css';
import '../../css/a/ac4y2vcgf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vburjzbet"/><path class="dn60esb4g"/><path class="ac4y2vcgf"/>`,
		"fallback": "ant-design:printer-twotone",
	});
}

export default Component;
