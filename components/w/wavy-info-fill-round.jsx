import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zstyur1bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zstyur1bn"/>`,
		"fallback": "coolicons:wavy-info-fill-round",
	});
}

export default Component;
