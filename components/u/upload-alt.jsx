import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okq_komxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okq_komxg"/>`,
		"fallback": "vaadin:upload-alt",
	});
}

export default Component;
