import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6d250bwp.css';
import '../../css/e/e6101wj0a.css';
import '../../css/h/hlvhjsz4e.css';
import '../../css/d/dg1k72fde.css';
import '../../css/s/se0dh3dto.css';
import '../../css/z/zno4v69ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6d250bwp"/><path class="e6101wj0a"/><path class="hlvhjsz4e"/><path clip-rule="evenodd" class="dg1k72fde"/><path class="se0dh3dto"/><path class="zno4v69ad"/>`,
		"fallback": "solar:users-group-two-rounded-outline",
	});
}

export default Component;
