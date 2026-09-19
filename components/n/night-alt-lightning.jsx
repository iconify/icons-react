import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue4blbbkw.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue4blbbkw"/>`,
		"fallback": "fontisto:night-alt-lightning",
	});
}

export default Component;
