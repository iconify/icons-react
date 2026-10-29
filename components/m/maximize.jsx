import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/typ168lje.css';
import '../../css/b/brefaib6f.css';
import '../../css/g/gv1maybhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="typ168lje wm-shadow"/><path class="brefaib6f wm-k"/><path class="gv1maybhe wm-k"/>`,
		"fallback": "withicons-pastel:maximize",
	});
}

export default Component;
