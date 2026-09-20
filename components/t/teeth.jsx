import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaixgqb7g.css';
import '../../css/r/r-2sp9a4s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaixgqb7g"/><path class="r-2sp9a4s"/>`,
		"fallback": "vaadin:teeth",
	});
}

export default Component;
