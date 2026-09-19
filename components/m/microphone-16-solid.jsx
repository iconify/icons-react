import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1mnhwjrl.css';
import '../../css/a/a311pob4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1mnhwjrl"/><path class="a311pob4u"/>`,
		"fallback": "heroicons:microphone-16-solid",
	});
}

export default Component;
