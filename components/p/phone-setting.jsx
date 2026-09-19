import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bee6wqbxv.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bee6wqbxv"/>`,
		"fallback": "zmdi:phone-setting",
	});
}

export default Component;
