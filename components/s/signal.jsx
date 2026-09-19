import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9ugdqbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9ugdqbxw"/>`,
		"fallback": "heroicons-outline:signal",
	});
}

export default Component;
