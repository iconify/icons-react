import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpoq-6_vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kpoq-6_vi"/>`,
		"fallback": "streamline-sharp:warp-fish-remix",
	});
}

export default Component;
