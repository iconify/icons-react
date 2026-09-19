import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1crgvb3e.css';
import '../../css/t/t694e9bfw.css';

const viewBox = {"width":375,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1crgvb3e"/><path class="t694e9bfw"/>`,
		"fallback": "file-icons:parrot",
	});
}

export default Component;
