import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkwydw92x.css';
import '../../css/g/gc8-4tb2b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkwydw92x"/><path class="gc8-4tb2b"/>`,
		"fallback": "ant-design:play-square",
	});
}

export default Component;
