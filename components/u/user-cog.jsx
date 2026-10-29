import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5zor_ndn.css';
import '../../css/m/mcj8uxbod.css';
import '../../css/g/g7o_0db-i.css';
import '../../css/z/zpobyobrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5zor_ndn wm-k"/><path class="mcj8uxbod wm-k"/><path class="g7o_0db-i wm-s"/><path class="wm-s zpobyobrs"/>`,
		"fallback": "withicons-bauhaus:user-cog",
	});
}

export default Component;
