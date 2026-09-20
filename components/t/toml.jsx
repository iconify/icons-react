import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zofucd4sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zofucd4sf"/>`,
		"fallback": "tabler:toml",
	});
}

export default Component;
