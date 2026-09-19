import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rddng9bnu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rddng9bnu"/>`,
		"fallback": "entypo-social:vk-with-circle",
	});
}

export default Component;
