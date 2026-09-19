import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjbvnem1g.css';
import '../../css/p/ppiwk-bdn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="qjbvnem1g"/><path class="ppiwk-bdn"/>`,
		"fallback": "garden:table-fill-16",
	});
}

export default Component;
