import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atxcznbro.css';
import '../../css/k/knpqz8bcw.css';
import '../../css/v/v93089bzn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atxcznbro"/><ellipse class="knpqz8bcw"/><path class="v93089bzn"/>`,
		"fallback": "nimbus:picture",
	});
}

export default Component;
