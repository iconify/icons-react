import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x495w1bkv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x495w1bkv"/>`,
		"fallback": "streamline-plump:lipstick-remix",
	});
}

export default Component;
