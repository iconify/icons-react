import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm3xmebmn.css';
import '../../css/g/gykrvcc7h.css';
import '../../css/u/uz7k7mbin.css';
import '../../css/b/b4wag86-y.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm3xmebmn"/><path class="gykrvcc7h"/><path class="uz7k7mbin"/><path class="b4wag86-y"/>`,
		"fallback": "ant-design:insurance-twotone",
	});
}

export default Component;
