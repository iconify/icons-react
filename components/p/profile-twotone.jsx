import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/u/ufrvvubmu.css';
import '../../css/z/zy-6bbbak.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="ufrvvubmu"/><path class="zy-6bbbak"/>`,
		"fallback": "ant-design:profile-twotone",
	});
}

export default Component;
