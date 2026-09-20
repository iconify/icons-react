import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozigqchsx.css';
import '../../css/u/u4tpbbpvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozigqchsx"/><path class="u4tpbbpvm"/>`,
		"fallback": "selfhst:minio",
	});
}

export default Component;
