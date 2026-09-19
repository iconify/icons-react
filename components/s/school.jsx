import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkljblwjh.css';
import '../../css/n/nb72zx0al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkljblwjh"/><path class="nb72zx0al"/>`,
		"fallback": "boxicons:school",
	});
}

export default Component;
