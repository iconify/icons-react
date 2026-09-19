import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgr4lpegd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgr4lpegd"/>`,
		"fallback": "eos-icons:kubelet",
	});
}

export default Component;
