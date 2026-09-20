import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2bpek80n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y2bpek80n"/>`,
		"fallback": "streamline-sharp:recording-tape-2-remix",
	});
}

export default Component;
