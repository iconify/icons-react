import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q712rm2xz.css';
import '../../css/a/aw76ujlyo.css';
import '../../css/w/w68m2kb4h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q712rm2xz"/><path class="aw76ujlyo"/><path class="w68m2kb4h"/>`,
		"fallback": "ant-design:tablet-twotone",
	});
}

export default Component;
