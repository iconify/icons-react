import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxd_4bb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kxd_4bb2b"/>`,
		"fallback": "streamline-sharp:roller-paintbrush-remix",
	});
}

export default Component;
