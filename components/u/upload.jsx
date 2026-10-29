import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec_0r_tga.css';
import '../../css/n/nx9eqfb9e.css';
import '../../css/a/aloyasbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec_0r_tga wm-k"/><path class="nx9eqfb9e wm-a"/><path class="aloyasbca wm-a"/>`,
		"fallback": "withicons-bauhaus:upload",
	});
}

export default Component;
