import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkcf_lkax.css';
import '../../css/b/b98f6w00t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkcf_lkax"/><path clip-rule="evenodd" class="b98f6w00t"/>`,
		"fallback": "heroicons:tv-16-solid",
	});
}

export default Component;
