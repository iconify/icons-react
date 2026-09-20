import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkom64bwh.css';
import '../../css/v/vk7tt5b4s.css';
import '../../css/u/u_l71ebni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkom64bwh"/><path class="vk7tt5b4s"/><path class="u_l71ebni"/>`,
		"fallback": "selfhst:ksuite-mail-dark",
	});
}

export default Component;
