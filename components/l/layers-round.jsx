import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp1jl345l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp1jl345l"/>`,
		"fallback": "coolicons:layers-round",
	});
}

export default Component;
