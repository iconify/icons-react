import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zstbz94ff.css';
import '../../css/e/ep6g36qhy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zstbz94ff"/><path class="ep6g36qhy"/>`,
		"fallback": "garden:search-stroke-16",
	});
}

export default Component;
