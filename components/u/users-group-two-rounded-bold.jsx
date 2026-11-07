import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lagukibcz.css';
import '../../css/y/yffxg5ktw.css';
import '../../css/b/bi3s7qmxc.css';
import '../../css/b/buif742pl.css';
import '../../css/z/z_0u9humb.css';
import '../../css/c/cfzsbfbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lagukibcz"/><path class="yffxg5ktw"/><path class="bi3s7qmxc"/><path class="buif742pl"/><path class="z_0u9humb"/><path class="cfzsbfbml"/>`,
		"fallback": "solar:users-group-two-rounded-bold",
	});
}

export default Component;
