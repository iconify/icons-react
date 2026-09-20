import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi0lwub-e.css';
import '../../css/e/eekz3efxq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi0lwub-e"/><path class="eekz3efxq"/>`,
		"fallback": "vaadin:random",
	});
}

export default Component;
