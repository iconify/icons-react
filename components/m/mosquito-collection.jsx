import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3jxn1xds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u3jxn1xds"/>`,
		"fallback": "healthicons:mosquito-collection",
	});
}

export default Component;
