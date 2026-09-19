import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3pg_fb6f.css';
import '../../css/z/zunt0gbkl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="r3pg_fb6f"/><path class="zunt0gbkl"/>`,
		"fallback": "ion:transgender-outline",
	});
}

export default Component;
