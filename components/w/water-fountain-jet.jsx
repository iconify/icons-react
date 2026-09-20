import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs6407nni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs6407nni"/>`,
		"fallback": "streamline-ultimate:water-fountain-jet",
	});
}

export default Component;
