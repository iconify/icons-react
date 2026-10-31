import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejzqbh7mz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ejzqbh7mz"/>`,
		"fallback": "sidekickicons:table-cells-split-16-solid",
	});
}

export default Component;
