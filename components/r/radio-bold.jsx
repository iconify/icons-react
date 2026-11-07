import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyu_2jbbj.css';
import '../../css/h/hh3uuxn4j.css';
import '../../css/h/hk6-kiz3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyu_2jbbj"/><path class="hh3uuxn4j"/><path clip-rule="evenodd" class="hk6-kiz3s"/>`,
		"fallback": "solar:radio-bold",
	});
}

export default Component;
