import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qovs41bxq.css';
import '../../css/b/bmffqxcpw.css';
import '../../css/p/p-xw0w-5p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qovs41bxq"/><path class="bmffqxcpw"/><path class="p-xw0w-5p"/>`,
		"fallback": "energy-icons:wand-20",
	});
}

export default Component;
