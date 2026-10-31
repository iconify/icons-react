import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7ezobcke.css';
import '../../css/c/chm7fdc5b.css';
import '../../css/v/v66gpt9yj.css';
import '../../css/l/lmbelcc2s.css';
import '../../css/k/k8ofb3baa.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7ezobcke"/><path class="chm7fdc5b"/><path class="v66gpt9yj"/><path class="lmbelcc2s"/><path class="k8ofb3baa"/>`,
		"fallback": "tabler-flags:macau",
	});
}

export default Component;
