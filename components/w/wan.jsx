import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm7t8jb2j.css';
import '../../css/a/agsh3e2_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm7t8jb2j"/><path class="agsh3e2_t"/>`,
		"fallback": "token:wan",
	});
}

export default Component;
