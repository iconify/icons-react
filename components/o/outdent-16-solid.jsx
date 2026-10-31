import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afmco4o4f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="afmco4o4f"/>`,
		"fallback": "sidekickicons:outdent-16-solid",
	});
}

export default Component;
