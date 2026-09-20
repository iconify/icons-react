import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmy_tkzyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmy_tkzyg"/>`,
		"fallback": "simple-icons:spinnaker",
	});
}

export default Component;
