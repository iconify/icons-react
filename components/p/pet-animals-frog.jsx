import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjo1kcb7f.css';
import '../../css/v/vpwzyn_kv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjo1kcb7f"/><path class="vpwzyn_kv"/>`,
		"fallback": "streamline-pixel:pet-animals-frog",
	});
}

export default Component;
