import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm5rxtu_s.css';
import '../../css/y/yqxcomdtf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm5rxtu_s"/><path class="yqxcomdtf"/>`,
		"fallback": "ant-design:skin-twotone",
	});
}

export default Component;
