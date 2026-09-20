import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aly2rpw4i.css';
import '../../css/s/sejfddchz.css';
import '../../css/b/bfilv4bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aly2rpw4i"/><path class="sejfddchz"/><path class="bfilv4bxc"/>`,
		"fallback": "token:pola",
	});
}

export default Component;
